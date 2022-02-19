using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public static class Paging
    {
        public static IQueryable<T> paginage<T>(this IQueryable<T> querable, int pageNumber,int RecourdPerpage )
        {
            return querable.Skip((pageNumber - 1) *RecourdPerpage).Take(RecourdPerpage);
        }
    }
}
