from django.contrib.auth import login, logout
from django.contrib.auth.hashers import check_password
from django.contrib.auth import get_user_model
from django.forms import ValidationError
from rest_framework import generics, permissions, response
from rest_framework.authtoken.models import Token
from .serializers import RegistrationSerializer
# from django.http import JsonResponse
# from django.core import serializers
# from .models import MyModel



User = get_user_model()

# Register API
class RegisterUserAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        user.is_active = True
        user.save()
        token = Token.objects.get_or_create(user=user)[0].key
        data = {
            "message": "user registered successfully",
            "email": user.email,
            "username": user.username,
            "token": token,
        }
        return response.Response(data)

# Login API
class LoginUserAPIView(generics.GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegistrationSerializer

  

    def post(self, request, *args, **kwargs):
        data = {}
        reqBody = request.data
        email = reqBody.get('email')
        password = reqBody.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise ValidationError({"400": "Account doesn't exist"})

        token = Token.objects.get_or_create(user=user)[0].key
        if not check_password(password, user.password):
            raise ValidationError({"message": "Incorrect login credentials"})

        if not user.is_active:
            raise ValidationError({"400": "Account not active"})

        login(request, user)
        data["message"] = "User logged in"
        data["email"] = user.email
        response_data = {"data": data, "token": token}
        return response.Response(response_data)
        
    
   
# Logout API
class UserLogoutAPIView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        logout(request)
        return response.Response('User logged out successfully')




#     def my_model_list(request):
#       my_models = MyModel.objects.all()
#       data = serializers.serialize('json', my_models)
#       return JsonResponse({'results': data})
    
#     from django.http import JsonResponse

# from django.http import JsonResponse
# from django.contrib.auth.models import User

# def check_user(request):
#     email = request.POST.get('email')
#     password = request.POST.get('password')
#     try:
#         user = User.objects.get(email=email)
#         if user.check_password(password):
#             user_found = True
#         else:
#             user_found = False
#     except User.DoesNotExist:
#         user_found = False
#     if user_found:
#         return JsonResponse({'message': 'User found'})
#     else:
#         return JsonResponse({'message': 'User not found'})

