import { getGalleryMedia } from "@/lib/api";
import MediaGrid from "@/components/MediaGrid";
import { IoCameraOutline } from "react-icons/io5";

export default async function GalleryPage() {
  const allItems = await getGalleryMedia(50);

  // ✅ Manually filter by attachment_category 16
  const photographyItems = allItems.filter((item) =>
    item.attachment_category?.includes(16)
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <h1 className=" font-grotesk text-3xl font-bold text-center py-6 flex gap-1 justify-center items-center">
        <IoCameraOutline  size={50}/>
        Je Fais des photos
      </h1>
      <MediaGrid items={photographyItems} />
    </main>
  );
}
