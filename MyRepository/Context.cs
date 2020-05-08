using Microsoft.EntityFrameworkCore;
using ViewModel;

namespace MyRepository
{
    public class Context : DbContext
    {
        public DbSet<MyName> Names { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }

}
