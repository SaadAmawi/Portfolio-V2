import openai
from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.views import APIView
from .throttle import GPTThrottle
from .prompt import prompt


def test(request):
    return HttpResponse(f"GPT App is working!")

class GenerateResponseView(APIView):
    throttle_classes = [GPTThrottle] 
    def post(self, request):
        user_messages = request.data.get('messages')
        openai.api_key = settings.OPENAI_API_KEY

        try:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": prompt},
                    # user_messages,
                ]+ user_messages
            )
            ai_response = response.choices[0].message.content
            return Response({'response': ai_response})
        except openai.APIError as e:
            return Response({'error': str(e)}, status=500)