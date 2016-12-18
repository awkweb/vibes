from .models import Profile
from django.contrib.auth import get_user_model
from django.shortcuts import render_to_response
from rest_framework import viewsets
from .serializers import UserSerializer, ProfileSerializer


def index(request):
    return render_to_response('../static/index.html')


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = get_user_model().objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows profiles to be viewed or edited.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
