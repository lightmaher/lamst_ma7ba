using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ImageRepository
{
   public interface IImageRepo
    {
        Task<IList<Image>> GetImages(int catid);
        Task addimage(Image image);
        Task deleteimage(int id);
    }
}
