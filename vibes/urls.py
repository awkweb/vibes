from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
import rest_framework_jwt.views
import djoser.views
from vibes.api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^$', views.index),
    url(r'^.*/$', views.index),  # Catches for vue-router HTML5 History Mode

    # Django Rest Framework
    url(r'^api/v1/', include(router.urls)),

    # Djoser https://github.com/sunscrapers/djoser
    # url(r'^api/v1/auth/me', djoser.views.),
    url(r'^api/v1/auth/register', djoser.views.RegistrationView.as_view()),
    url(r'^api/v1/auth/login/', rest_framework_jwt.views.obtain_jwt_token),
    # url(r'^api/v1/auth/logout/', ),
    url(r'^api/v1/auth/activate/', djoser.views.ActivationView.as_view()),
    url(r'^api/v1/auth/activate/', djoser.views.UserView.as_view()),
    url(r'^api/v1/auth/password/', djoser.views.SetPasswordView.as_view()),
    url(r'^api/v1/auth/password/reset', djoser.views.PasswordResetView.as_view()),
    url(r'^api/v1/auth/password/confirm', djoser.views.PasswordResetConfirmView.as_view()),
]
