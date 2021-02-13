using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistance;

namespace Application.ActivityHandler
{
    public class SingleActivity
    {
        public class Query: IRequest<Activity>
        {
            // parameter that the query will recieve will be here
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler (DataContext context)
            {
                _context = context;
            }
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id); 
            }
        }
    }
}