using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.NeedRepository
{
    public interface INeedRepo
    {
        Task<IEnumerable<Need>> GetAllNeedsAsync();
        Task<Need> AddNeedAsync(Need model);
        Task<Need> EditNeedAsync(Need model);
        Task<bool> DeleteAsync(int id);
    }
}
