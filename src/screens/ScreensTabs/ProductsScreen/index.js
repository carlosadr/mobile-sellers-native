import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, ImageBackground } from 'react-native';

import { 
    defaultAvatar,
    imgBackground,
} from '../../../components/utils/Images'

import Header from '../../../components/Header';
import styles from './styles';
import api from '../../../service/api';

export default function DashboardScreen () {
    const [products, setProducts] = useState([])

    async function loadProducts () {
        const response = await api.get('produto');

        setProducts([ ...products, ...response.data ])
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <ImageBackground style={styles.imgBackground} source={ imgBackground }>
            <View style={ styles.containerHeader } >
                <Header />
            </View>

            <View style={ styles.containerContants }>
                <View style={[ styles.containerTitleProducts, styles.containerShadow ]} >
                    <Text style={ [styles.containerTitle, { flex : 2, textAlign : 'center' }]}>
                        Imagem
                    </Text>
                    <Text style={ [styles.containerTitle, { flex : 5 }]}>
                        Descrição
                    </Text>
                    <Text style={ [styles.containerTitle, { flex : 1 }]}>
                        Preço
                    </Text>
                </View>

                <FlatList style={ styles.containerListProducts }
                    showsVerticalScrollIndicator = { false }
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    keyExtractor={ products => String(products) }
                    renderItem={() => (
                        <View style={[ styles.containerProducts, styles.containerShadow ]}>
                            <View style={ styles.containerImage }>
                                <Image style={ styles.image } source={defaultAvatar} />
                            </View>

                            <View style={ styles.containerDescription }>
                                <Text style={ styles.containerDescriptionTitle }>
                                    { "products.name" }
                                </Text>
                                <Text style={ styles.containerSubDescription }>
                                    { "products.size_id" }
                                </Text>
                                <Text style={ styles.containerSubDescription }>
                                    { "products.category_id" }
                                </Text>
                            </View>

                            <View style={ styles.containerValues }>
                                <Text style={ styles.containerPrice }>
                                    { "R$ 25,90" /* "products.unit_price"*/ }
                                </Text>
                                <Text style={ styles.containerPrice }>
                                    { "R$ 24,90"/* "products.unit_price_discount" */ }
                                </Text>
                            </View>
                        </View>
                    ) }
                />
            </View>
        </ImageBackground>
    )
}