import os
from typing import Awaitable, Callable

from quart import Quart, request
from quart_cors import cors
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse

from twilio_backend import BASE_DIR

# https://www.youtube.com/watch?v=OVguB1h-eTs
# https://www.youtube.com/watch?v=eoB06H9x7VU

app = Quart(__name__, root_dir=BASE_DIR)
cors_app = cors(app, allow_origin=['localhost:3000', 'https://ineiah.com'], allow_credentials=True)

client = Client(os.getenv('TWILIO_SID'), os.getenv('TWILIO_AUTH_TOKEN'))

def protected_view(view_func: Callable[...]) -> Callable[..., Awaitable]:
    async def wrapper(*args, **kwargs):
        auth = request.headers.get('Authorization')
        if not auth or auth != os.getenv('BEARER_TOKEN'):
            return {'error': 'Unauthorized'}, 401
        return await view_func(*args, **kwargs)
    return wrapper


@protected_view
@cors_app.post('/v1/sms')
async def send_sms():
    data = await request.form
    message = client.messages.create(
        body=data.get('body'),
        from_=data.get('from'),
        to=data.get('to')
    )
    return {'sid': message.sid}, 201


@protected_view
@cors_app.post('/v1/voice')
async def voice_message():
    # Reference: https://www.youtube.com/watch?v=pJKOyOa-BUk
    response = VoiceResponse()
    response.say("Hello, this is a voice message from Twilio!")
    response.record()
    response.hangup()
    return str(response), 200
