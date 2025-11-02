from django.urls import path
from .views import GenerateResponseView

urlpatterns = [
    path('gpt/', GenerateResponseView.as_view(), name="GPT_Response"),
]