using AutoMapper;
using Models;

namespace Application.Core
{
    public class Mapper: Profile
    {
        public Mapper ()
        {
            CreateMap<Activity, Activity>();
        }
    }
}