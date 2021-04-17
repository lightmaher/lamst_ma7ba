using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ImageCatRepository
{
  public  interface IImageCatRepo
    {
        Task addimagecat( ImageCat imageCat);
        Task<IList<ImageCat>> showImagesCat();
        Task DeleteImagecat(int id);
        Task<ImageCat> showimagecat(int id);
        Task<ImageCat> updateimagecat(int id);
    }
}
