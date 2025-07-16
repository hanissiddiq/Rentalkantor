import { OfficeSpace } from "../types/OfficeSpace.types";
import Link from "next/link";
import Image from "next/image";

export default function OfficeSpaceCard({space}:{space:OfficeSpace}) {
  return (

      <Link href={`/office/${space.slug}`} className="card">
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
          <div className="thumbnail-container relative w-full h-[200px]">
            <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
              Popular
            </p>


            {space.tags.map((tag) => (
              <p key={tag} className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                {tag}
              </p>
            ))}


            {/* <img
              src="/assets/images/thumbnails/thumbnails-1.png"
              className="w-full h-full object-cover"
              alt="thumbnails"
            /> */}
            <Image
              src={space.image}
              width={400}
              height={200}
              className="w-full h-full object-cover"
              alt="thumbnails"
              />
          </div>
          <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
            <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
              {/* Angga Park Central Master Silicon Valley Star Class */}
              {space.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl leading-[30px]">
                {/* Rp 18.560.000 */}

               {space.price.toLocaleString('id-ID', {
                  style: 'currency',
                    minimumFractionDigits: 0,
                    currency : 'IDR'
                })}

              </p>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">
                    {/* 20 days */}
                {space.duration}
                </p>
                <img
                  src="/assets/images/icons/clock.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <img
                  src="/assets/images/icons/location.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold">
                    {/* Jakarta Pusat */}
                {space.location}                    
                </p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">
                    {/* 4.5/5 */}
                {space.rating.toFixed(1)}/5                
                    </p>
                <img
                  src="/assets/images/icons/Star 1.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <img
                  src="/assets/images/icons/wifi.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold">
                    {/* Fast-Connection */}
                    {space.features[0]}                    
                </p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <img
                  src="/assets/images/icons/security-user.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                
                <p className="font-semibold">
                  {/* Secure 100% */}
                  {space.features[1]}                  
                  </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}
