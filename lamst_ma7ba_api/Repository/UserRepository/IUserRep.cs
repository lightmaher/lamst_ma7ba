using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.UserRepository
{
    public interface IUserRep
    {
        Task AddUser(User user);
        Task DeleteUser(int id);
        Task<IList<User>> ShowUsers();
        Task<User> ShowUser(int id);
    }
}
