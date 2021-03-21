# AsyncStorage
Exemplos praticos para usar a função AsyncStorage.

## Exemple:
#### Imports
```
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
```

#### Variáveis
```
const [ token, setToken ] = useState("")
const [ user, setUser ] = useState("")
```

#### Funções para armazenar os dados
```
async function setTokenLocal ( token ) {
    return await AsyncStorage.setItem('token', token);
}
async function setUserLocal ( cpf_cnpj ) {
    return await AsyncStorage.setItem('user', cpf_cnpj);
}
```

#### Funções para carregar os dados;
```
async function getTokenLocal( ) {
    try {
        await AsyncStorage.getItem('token', (err, item) => { setToken( item ) })
        return token
    } catch { ( error ) =>
        console.log( error );
    }
}

async function getUserLocal( ) {
    try {
        await AsyncStorage.getItem('user', (err, item) => { setUser( item )} )
        return user
    } catch { ( error ) =>
        console.log( error );
    }
}
```