from . import BaseSchema

class Address(BaseSchema):
    postal_code: str
    public_place: str
    complement: str
    unity: str
    neighborhood: str
    city: str
    uf: str
    ibge: str
    gia: str
    ddd: str
    siafi: str

class AddressMsg(BaseSchema):
    message: str
    data: Address