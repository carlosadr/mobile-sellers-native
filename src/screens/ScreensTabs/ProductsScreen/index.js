import React, { useEffect, useState } from 'react';

import { 
    View,
    FlatList, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground 
} from 'react-native';

import Swipeout from 'react-native-swipeout';

import { Feather } from '@expo/vector-icons';

import { 
    defaultAvatar,
    imgBackground,
} from '../../../components/utils/Images'

import Header from '../../../components/Header';
import styles from './styles';
import api from '../../../service/api';
import { orange, white } from '../../../components/utils/Colors';
import SwipeableProducts from '../../../components/SwipeableProducts';

export default function DashboardScreen () {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(false);

    const productsList = [
        {
            store_id : 1,
            status : "Ativo",
            name : "Cueca Fralda Amarela",
            sku : "EDF115252",
            unit_price : 29.50,
            unit_price_discount : 25.99,
            description : "Cueca fralda serve para homens que já estão em uma certa idade para previnir freadas de cueca.",
            stock : 1,
            seo_description : "Algo",
            seo_name : "Algo",
            category_id : 1,
            collor_id : 1,
            size_id : 1
        },
        {
            store_id : 2,
            status : "Ativo",
            name : "Cueca Fralda Roxa",
            sku : "EDF115252",
            unit_price : 29.50,
            unit_price_discount : 25.99,
            description : "Cueca fralda serve para homens que já estão em uma certa idade para previnir freadas de cueca.",
            stock : 1,
            seo_description : "Algo",
            seo_name : "Algo",
            category_id : 1,
            collor_id : 1,
            size_id : 1
        },
        {
            store_id : 3,
            status : "Ativo",
            name : "Cueca Fralda Vermelha",
            sku : "EDF115252",
            unit_price : 29.50,
            unit_price_discount : 25.99,
            description : "Cueca fralda serve para homens que já estão em uma certa idade para previnir freadas de cueca.",
            stock : 1,
            seo_description : "Algo",
            seo_name : "Algo",
            category_id : 1,
            collor_id : 1,
            size_id : 1
        }
    ]

    async function loadProducts () {
        if (loading) {
            return;
        }

        // const response = await api.get('produto');

        setProducts([ ...products, ...productsList ])
        setLoading(true)
    }

    useEffect(() => {
        loadProducts();
    }, [ ])

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

                <FlatList 
                    style={ styles.containerListProducts }
                    showsVerticalScrollIndicator = { false }
                    data={ products }
                    keyExtractor={ products => String(products.id) }
                    renderItem={({ item : products }) => (
                        < SwipeableProducts
                            image={ defaultAvatar }
                            name={ products.name }
                            sizes={ products.size_id }
                            category={ products.category_id }
                            price={ products.unit_price }
                            price-discount={ products.unit_price_discount }
                            onRightPress={ () => {} }
                        />
                    ) }
                />
            </View>
        </ImageBackground>
    )
}