from fastapi import APIRouter, status, HTTPException
from schemas.address import Address, AddressMsg
import requests

router = APIRouter(prefix='/address')

@router.get('/get', status_code=status.HTTP_200_OK, response_model=AddressMsg)
def get_address(postal_code: str):
    if len(postal_code) != 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="postal code less or more than expected")
    
    response = requests.get(f'https://viacep.com.br/ws/{postal_code}/json/')
    data = response.json()
    address = Address(
        postal_code=data['cep'],
        public_place=data['logradouro'],
        complement=data['complemento'],
        unity=data['unidade'],
        neighborhood=data['bairro'],
        city=data['localidade'],
        uf=data['uf'],
        ibge=data['ibge'],
        gia=data['gia'],
        ddd=data['ddd'],
        siafi=data['siafi']
    )
    if response.status_code == 200:
        return {
            'message': 'success to get address informations',
            'data': address
        }
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST, detail="unespected error occurr")