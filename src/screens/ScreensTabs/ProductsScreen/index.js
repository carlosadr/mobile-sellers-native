import React, { useEffect, useState } from 'react';

import { 
    View, 
    ScrollView, 
    FlatList, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground 
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { 
    defaultAvatar,
    imgBackground,
} from '../../../components/utils/Images'

import Header from '../../../components/Header';
import styles from './styles';
import api from '../../../service/api';
import { orange, white } from '../../../components/utils/Colors';
import Button from '../../../components/Button';

export default function DashboardScreen () {
    const [ products, setProducts ] = useState([])

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

                <TouchableOpacity 
                    style={[ styles.buttonPlus, styles.containerShadow ]} 
                    onPress={ () => { console.log("Botão acrescentar produto foi prescionado.") } }
                >
                    <Feather name="plus" size={35} color={white} />
                </TouchableOpacity>

                <FlatList style={ styles.containerListProducts }
                    showsVerticalScrollIndicator = { false }
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    keyExtractor={ products => String(products) }
                    renderItem={() => (
                        <TouchableOpacity 
                            onPress={ () => {} }
                        >
                            <View style={{ flexDirection : 'row', }} >
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
                                            { "R$ 24,90" /* "products.unit_price_discount" */ }
                                        </Text>
                                    </View>
                                </View>
                                {/* <TouchableOpacity style={{
                                    flex : 0.20, 
                                    backgroundColor : orange, 
                                    alignItems : 'center',
                                    justifyContent : 'center',
                                    marginRight : 8,
                                    borderRadius : 12,
                                    marginVertical : 4,
                                }} >
                                    <Feather name="trash-2" size={ 22 } color={ white } />
                                </TouchableOpacity> */}
                            </View>
                        </TouchableOpacity>
                    ) }
                />
            </View>
        </ImageBackground>
    )
}