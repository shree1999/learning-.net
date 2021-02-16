using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Models;
using Persistance;

namespace API.Extensions
{
    public static class IdentityServiceExtension
    {
        public static IServiceCollection AddIdentityService(this IServiceCollection service, IConfiguration config)
        {
            service.AddIdentityCore<AppUser>(option => 
            {
                option.Password.RequireNonAlphanumeric = false;
            })
            .AddEntityFrameworkStores<DataContext>()
            .AddSignInManager<SignInManager<AppUser>>();

            service.AddAuthentication();

            return service;
        } 
    }
}