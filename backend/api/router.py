from rest_framework.routers import DefaultRouter
from user.views import LogoutView, PermissionView, GroupView, UserView


router = DefaultRouter()
router.register(prefix='groups', basename='groups', viewset=GroupView)
router.register(prefix='users', basename='users', viewset=UserView)
router.register(
    prefix='permissions',
    basename='permissions',
    viewset=PermissionView
)
router.register(
    prefix='logout',
    basename='logout',
    viewset=LogoutView
)
