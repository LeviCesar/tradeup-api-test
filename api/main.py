from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import address

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api.get('/')
def root():
    return {'message': 'running...'}

api.include_router(address.router)
