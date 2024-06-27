from fastapi import FastAPI
from routers import address

api = FastAPI()

api.get('/')
def root():
    return {'message': 'running...'}

api.include_router(address.router)
