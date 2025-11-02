from rest_framework.throttling import SimpleRateThrottle
from rest_framework.exceptions import Throttled

class GPTThrottle(SimpleRateThrottle):
    scope = 'custom_gpt'

    def get_cache_key(self, request, view):
        ident = self.get_ident(request)
        return self.cache_format % {'scope': self.scope, 'ident': ident}
    
    def throttle_failure(self):

        wait = self.wait()
        detail = f"Too many requests. This API is being throttled to ensure no user can use up all my tokens! :D \n try again in {int(wait)//60} minutes." if wait else "Too many requests. Please try again later."
        raise Throttled(detail=detail)