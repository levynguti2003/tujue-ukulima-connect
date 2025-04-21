
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type CropVideos = {
  [crop: string]: { title: string; url: string }[];
};

const cropVideos: CropVideos = {
  "Maize Production": [
    { title: "Maize Video 1", url: "https://youtu.be/mZgSeChDyaY?si=ENVvAyHrFkpB7PU5" },
    { title: "Maize Video 2", url: "https://youtu.be/dtjnVRONL0k?si=X9U3RsX_7uPydi3R" },
    { title: "Maize Video 3", url: "https://youtu.be/fz3JwTU82uA?si=pAz7_oaLYQNoELkz" },
    { title: "Maize Video 4", url: "https://youtu.be/nfMLKP1nXK0?si=x59FMmMeNiUOPD33" },
    { title: "Maize Video 5", url: "https://youtu.be/qdpAYlv8D60?si=NHxg-2U33rUXWdLs" },
    { title: "Maize Video 6", url: "https://youtu.be/R9pxFgJwxFE?si=Ik7wGBakarpW68vb" },
    { title: "Maize Video 7", url: "https://youtu.be/JOYwDUTOahU?si=EFbtFQMAO7-POWHF" },
    { title: "Maize Video 8", url: "https://youtu.be/Deen3_bRV6A?si=WywXrr6o53cgXAIN" },
    { title: "Maize Video 9", url: "https://youtu.be/_cnmaJsM2rc?si=0S6-oIbO_1CkV_6S" },
    { title: "Maize Video 10", url: "https://youtu.be/T790s9VSIN4?si=ULMjAZ1kCX-aEimJ" },
    { title: "Maize Video 11", url: "https://youtu.be/NjyOjR3O4Yk?si=rr1t7zX2POL701e0" },
  ],
  "Wheat Production": [
    { title: "Wheat Video 1", url: "https://youtu.be/SJv8bHTq4mU?si=2ga3kUxv9kKKSKZ1" },
    { title: "Wheat Video 2", url: "https://youtu.be/RYn_yUUpwSQ?si=VgDUqq9Tkzl0f9a9" },
    { title: "Wheat Video 3", url: "https://youtu.be/AonJkhqCRwk?si=e7PaeRoJ23UebFra" },
    { title: "Wheat Video 4", url: "https://youtu.be/6ewdzIPyXzM?si=CJm-kbg26U5TF5vc" },
    { title: "Wheat Video 5", url: "https://youtu.be/4NSRupPIJAw?si=fXkSIKtvs0IdNMBl" },
    { title: "Wheat Video 6", url: "https://youtu.be/kT1R7Hkps5M?si=l-_PX6yNx1yaaNMt" },
  ],
  "Rice Production": [
    { title: "Rice Video 1", url: "https://youtu.be/J_mMS3EkHok?si=dO8krk9JdmGttE17" },
    { title: "Rice Video 2", url: "https://youtu.be/kT1R7Hkps5M?si=f-JJzxaaWny4UT7A" },
    { title: "Rice Video 3", url: "https://youtu.be/4dxzlspJ1eg?si=uR0TeUx28gRNvjI3" },
    { title: "Rice Video 4", url: "https://youtu.be/FW_bw9jdrlQ?si=ktulARFJXEnVkR5r" },
    { title: "Rice Video 5", url: "https://youtu.be/nQHjjmIVjTU?si=d4fKfwP4WtL9Sqhz" },
    { title: "Rice Video 6", url: "https://youtu.be/-eBrAm64fpg?si=SHLiQ0hs76XvPIZO" },
  ],
  "Soybeans": [
    { title: "Soybeans Video 1", url: "https://youtu.be/xqAI3i0nkhw?si=2ZGUvqSt2Siw14Eo" },
    { title: "Soybeans Video 2", url: "https://youtu.be/OApiO103-fs?si=UqTIrGS008alIBt_" },
    { title: "Soybeans Video 3", url: "https://youtu.be/9kW5vm0yj40?si=-rSTxbV4MsvYtFBX" },
    { title: "Soybeans Video 4", url: "https://youtu.be/BQ1jV_qEK_0?si=Ozp_pIx0rB_pT93i" },
    { title: "Soybeans Video 5", url: "https://youtu.be/1olmtb3MpME?si=1enTWMCXt6I_mSIL" },
    { title: "Soybeans Video 6", url: "https://youtu.be/5iGnpj2tVVc?si=YihBHndrnzrWou8d" },
  ],
  "Potatoes": [
    { title: "Potatoes Video 1", url: "https://youtu.be/p13FS2LXmC8?si=ikbhy7S2XEH6PQf_" },
    { title: "Potatoes Video 2", url: "https://youtu.be/6_q_I5w8qOE?si=w2I-3SQ_dU93dZgC" },
    { title: "Potatoes Video 3", url: "https://youtu.be/h3CjEoT7yvA?si=CcsKj1wQ-u8rmfxF" },
    { title: "Potatoes Video 4", url: "https://youtu.be/qgjgcEpdbzY?si=FbKztP-0Nn32gmR5" },
    { title: "Potatoes Video 5", url: "https://youtu.be/u5joP2XNrzU?si=EJGlgQ62-CFGW1Ll" },
    { title: "Potatoes Video 6", url: "https://youtu.be/nOqHVXtm3ec?si=ND09oUbNtr0pX4ia" },
  ],
  "Cassava": [
    { title: "Cassava Video 1", url: "https://youtu.be/uAQiuge4SWE?si=_lWc-2X56Zpy8rus" },
    { title: "Cassava Video 2", url: "https://youtu.be/Rj8uKXYMFbU?si=k3pvPJmm5DWu8qLH" },
    { title: "Cassava Video 3", url: "https://youtu.be/jmXMSDSSBno?si=N1gURo-5ybtb6m7i" },
    { title: "Cassava Video 4", url: "https://youtu.be/4gDFN8A3EXA?si=8bNODauM_RKJVt2O" },
    { title: "Cassava Video 5", url: "https://youtu.be/MPQWRiCuQYk?si=2xf0T8f4oKQDoDfk" },
    { title: "Cassava Video 6", url: "https://youtu.be/H4EeIanZ1Lk?si=Ke4N-0i1cQslvc2q" },
  ],
  "Tomatoes": [
    { title: "Tomatoes Video 1", url: "https://youtu.be/FSFBPtRO4HU?si=NQDdVuudFdUbBzKU" },
    { title: "Tomatoes Video 2", url: "https://youtu.be/nNi-mWj1rpE?si=1qQe9ms7IHdRqP16" },
    { title: "Tomatoes Video 3", url: "https://youtu.be/OMIbtIZ2E-Q?si=zcgx02XWF21tH6fp" },
    { title: "Tomatoes Video 4", url: "https://youtu.be/woi4Q2LXby4?si=_UjHsIODSg23sCpi" },
    { title: "Tomatoes Video 5", url: "https://youtu.be/Rw0JjxdByjM?si=IIWdvXOtWXMOyAul" },
    { title: "Tomatoes Video 6", url: "https://youtu.be/DWSlfQegLpU?si=4CIuUPm3m1JZlqvx" },
  ],
  "Bananas": [
    { title: "Bananas Video 1", url: "https://youtu.be/If9U6ME3ycQ?si=r5JJmZl-9j4vjLcY" },
    { title: "Bananas Video 2", url: "https://youtu.be/jyOnH6blEOU?si=AjaEAde84SD2jNNe" },
    { title: "Bananas Video 3", url: "https://youtu.be/d5JIwPUwXIk?si=rcnaZnS0xUbM64RO" },
    { title: "Bananas Video 4", url: "https://youtu.be/_l7sak6Vlq8?si=Ug6kHkvJnnI4x9os" },
    { title: "Bananas Video 5", url: "https://youtu.be/PyomFUjH3Ug?si=r1eXQQhbVUEf5WQ9" },
    { title: "Bananas Video 6", url: "https://www.youtube.com/live/Lm9wQ9YS41g?si=jq-uKku_TfI69kYT" },
  ],
  "Sugarcane": [
    { title: "Sugarcane Video 1", url: "https://youtu.be/ZfTIyrGQ8Fc?si=lu0nOLWWYH_7CExR" },
    { title: "Sugarcane Video 2", url: "https://youtu.be/1FwYhAF7mf0?si=4PEIPZcU7bXCqXnY" },
    { title: "Sugarcane Video 3", url: "https://youtu.be/TTxYCQW5JYU?si=h2BfyEht0-BYWD_0" },
    { title: "Sugarcane Video 4", url: "https://youtu.be/kNt11njEsgc?si=UeOEPOL7elGxHTIH" },
    { title: "Sugarcane Video 5", url: "https://youtu.be/ow9c_hyNPOo?si=QhwH50wcmSE1DIPQ" },
    { title: "Sugarcane Video 6", url: "https://youtu.be/8UFLzMYxBuU?si=LXzqYWYC0GLLMFbC" },
    { title: "Sugarcane Video 7", url: "https://youtu.be/HaorlLuuOiQ?si=U7dVaJxdO7Okj97L" },
  ],
  "Coffee": [
    { title: "Coffee Video 1", url: "https://youtu.be/vzGa9Wi-KwM?si=YaBttuSCJNcXxYJg" },
    { title: "Coffee Video 2", url: "https://youtu.be/L7ahUGlB8S0?si=grsFDZ5-AuI1gj8Q" },
    { title: "Coffee Video 3", url: "https://youtu.be/6skcgBvorDk?si=ux1WxbyKBHTPu3DH" },
    { title: "Coffee Video 4", url: "https://youtu.be/qCcrvFKyRos?si=-JcVVy20t_q36-Bo" },
    { title: "Coffee Video 5", url: "https://youtu.be/-CdScpRVYjI?si=RiCp_oQDvDjzzNcP" },
    { title: "Coffee Video 6", url: "https://youtu.be/gDwbAiZZFiY?si=rp5xuK-70nQwLHvI" },
    { title: "Coffee Video 7", url: "https://youtu.be/qJO00xcb_-A?si=ROsQymjEkb-czM0B" },
  ],
  "Barley": [
    { title: "Barley Video 1", url: "https://youtu.be/okfNv2Jgv0c?si=57tRFD-cVWMUXhiF" },
    { title: "Barley Video 2", url: "https://youtu.be/c4VUZfgDGmY?si=lhTVTmvocpVHNAgv" },
    { title: "Barley Video 3", url: "https://youtu.be/pQzx8EwisUk?si=VfRuAqAMbS9Qi1Ji" },
    { title: "Barley Video 4", url: "https://youtu.be/PZrDZdtonZc?si=yDBUDKZQEYXOJNLm" },
    { title: "Barley Video 5", url: "https://youtu.be/s9MhR3e3v6Q?si=v6HuX-yC7cZBKNMc" },
    { title: "Barley Video 6", url: "https://youtu.be/qlt3ny7t12A?si=lLj1Km1nY4Y0poXi" },
    { title: "Barley Video 7", url: "https://youtu.be/LAh9hiuZMw4?si=za0O1sqKoEKJ2NhO" },
  ],
  "Sorghum": [
    { title: "Sorghum Video 1", url: "https://youtu.be/LrcCOl9Tzbk?si=Z60JDAyJ98TDeoFE" },
    { title: "Sorghum Video 2", url: "https://youtu.be/sn3nf9ZDoB0?si=KCYPAcjVnpi9zUcW" },
    { title: "Sorghum Video 3", url: "https://youtu.be/VycEHReGyJc?si=_sB45bLzzGzqzJid" },
    { title: "Sorghum Video 4", url: "https://youtu.be/U4odgvVCblc?si=gTzKy_077AtmU0wA" },
    { title: "Sorghum Video 5", url: "https://youtu.be/Bk2pFz7woiA?si=ViHsEVP8a3U6ZQgm" },
    { title: "Sorghum Video 6", url: "https://youtu.be/WbaBocL-Yyo?si=2KqFzOIGj1cZE_1o" },
    { title: "Sorghum Video 7", url: "https://youtu.be/o1loek4cpPQ?si=2oIk406TKulgC2wm" },
    { title: "Sorghum Video 8", url: "https://youtu.be/BmdM93OFpps?si=Fdhnkn2YKvhN-o4t" },
  ],
  "Millet": [
    { title: "Millet Video 1", url: "https://youtu.be/E1FQ3QcWHR4?si=hN48OkByZ5AG_FRv" },
    { title: "Millet Video 2", url: "https://youtu.be/9XMv5C7t5gs?si=KneIJpza0GaDAH_R" },
    { title: "Millet Video 3", url: "https://youtu.be/m8cxzy4F_7Q?si=aHHalum00lwk0k8u" },
    { title: "Millet Video 4", url: "https://youtu.be/Rn5O67fNaHk?si=q5yFYQoX4sAmj0XA" },
    { title: "Millet Video 5", url: "https://youtu.be/deHuvbPgtyw?si=E6IOuRLCuuqInuRN" },
    { title: "Millet Video 6", url: "https://youtu.be/JAnK5qlsH8k?si=ifOQyWTYofyxHqon" },
  ],
  "Cotton": [
    { title: "Cotton Video 1", url: "https://youtu.be/eN-TqqBQOAk?si=p1INxarQVoSSUMen" },
    { title: "Cotton Video 2", url: "https://youtu.be/UciWr-v2aws?si=M1yqj_iHdyKRDdSz" },
    { title: "Cotton Video 3", url: "https://youtu.be/2tuSifDu8Mo?si=boW5Dy9e0jRcmhGj" },
    { title: "Cotton Video 4", url: "https://youtu.be/QHgNoSYlhYs?si=qcQQsZ95iy654W5H" },
    { title: "Cotton Video 5", url: "https://youtu.be/VoDUWbGPvi4?si=z3XHTib4VA65wXbQ" },
    { title: "Cotton Video 6", url: "https://youtu.be/BofeiKsE5pU?si=afWLy_yE3mnSoAJ3" },
    { title: "Cotton Video 7", url: "https://youtu.be/INNnV7srprs?si=z7rwQpMXIH7yOrve" },
  ],
  "Chickpeas": [
    { title: "Chickpeas Video 1", url: "https://youtu.be/_EL8DL1N-lQ?si=pvslak9Nh6nSDPQd" },
    { title: "Chickpeas Video 2", url: "https://youtu.be/enrZ8TJzEIs?si=wjDR3XHh57eQziOC" },
    { title: "Chickpeas Video 3", url: "https://youtu.be/UjzoyAu9mX0?si=cm-znZ4UVIl5xYaQ" },
    { title: "Chickpeas Video 4", url: "https://youtu.be/lCl3Yq5OZjw?si=2BPN9MWQVBQ2gwou" },
    { title: "Chickpeas Video 5", url: "https://youtu.be/qNxxsb76tJw?si=gP2FRSBHHdsthNp0" },
    { title: "Chickpeas Video 6", url: "https://youtu.be/fTyeKbEVO7M?si=4Plv5Z8QyQAMqGH3" },
    { title: "Chickpeas Video 7", url: "https://youtu.be/Xq-Ag3627oc?si=D1eg4c7EhQqQBnfW" },
  ],
  "Lentils": [
    { title: "Lentils Video 1", url: "https://youtu.be/afBPBl7TJpM?si=DTXxA5kuApdobW6u" },
    { title: "Lentils Video 2", url: "https://youtu.be/z8Bph21JuAM?si=FjdBMURoMJvDfkan" },
    { title: "Lentils Video 3", url: "https://youtu.be/RQhEOMdBxS8?si=605zJ8lyaBORjwEB" },
    { title: "Lentils Video 4", url: "https://youtu.be/9X-jv6WVCeI?si=Tm9suR14YwIu1igc" },
    { title: "Lentils Video 5", url: "https://youtu.be/UdSMPtUCl8k?si=iX6Rc3l_esHvhf2j" },
    { title: "Lentils Video 6", url: "https://youtu.be/JWtY1Oi-XwI?si=IXiEaoYKxSjWnJAY" },
    { title: "Lentils Video 7", url: "https://youtu.be/JjbwRuQch3A?si=dMFwLYO0dNNK0MjX" },
    { title: "Lentils Video 8", url: "https://youtu.be/-xcbWsw18Zc?si=6eQ_yrOnfh0mJu56" },
  ],
  "Onions": [
    { title: "Onions Video 1", url: "https://youtu.be/r1iKZ8y2xS4?si=kj1J7NunvPmeqWrc" },
    { title: "Onions Video 2", url: "https://youtu.be/7yw_R6wPi-k?si=3AFVydc-jZ62FZgT" },
    { title: "Onions Video 3", url: "https://youtu.be/Ll3JEY87sQc?si=RkiCPz4skpJRu5v2" },
    { title: "Onions Video 4", url: "https://youtu.be/CEP3GWY1v4o?si=U2I5OO9B87Qhdfu5" },
    { title: "Onions Video 5", url: "https://youtu.be/LXQNfjcZLv4?si=Mv7OXoiE4NyWbrqP" },
    { title: "Onions Video 6", url: "https://youtu.be/5TAj6g6RB70?si=Jhyt7WX6cCIWbOfU" },
    { title: "Onions Video 7", url: "https://youtu.be/DL2xzWsg4hw?si=NzAyAMyJXhxpzeoN" },
    { title: "Onions Video 8", url: "https://youtu.be/q7Y42IdEhgw?si=VXwS6weDoQwWE-rc" },
  ],
};

const cropNames = Object.keys(cropVideos);

function getYoutubeId(url: string) {
  const match = url.match(
    /(?:\/|%2F|youtu\.be\/|v=|\/v\/|watch\?v=|&v=|embed\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

interface CropVideosModalProps {
  open: boolean;
  onClose: () => void;
}

const CropVideosModal = ({ open, onClose }: CropVideosModalProps) => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) onClose(); }}>
      <DialogContent className="max-w-3xl sm:max-w-4xl p-0">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between p-5 border-b sticky top-0 bg-white z-10">
            <h3 className="text-lg font-bold">
              {selectedCrop ? selectedCrop + " - Videos" : "Select a Crop"}
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8"
            >
              <span className="sr-only">Close</span> ×
            </Button>
          </div>
          {!selectedCrop && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              {cropNames.map((crop) => (
                <Button
                  key={crop}
                  variant="outline"
                  className="w-full py-5 text-base"
                  onClick={() => setSelectedCrop(crop)}
                >
                  {crop}
                </Button>
              ))}
            </div>
          )}
          {selectedCrop && (
            <div>
              <div className="p-6 flex flex-wrap gap-4">
                {cropVideos[selectedCrop].map((vid, idx) => (
                  <div key={vid.url} className="w-full sm:w-72 flex flex-col mb-4">
                    <div className="aspect-video rounded-lg overflow-hidden shadow">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeId(vid.url)}`}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-700">{vid.title}</div>
                  </div>
                ))}
              </div>
              <div className="p-6 pt-0">
                <Button variant="secondary" onClick={() => setSelectedCrop(null)}>
                  Back to crop list
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CropVideosModal;
