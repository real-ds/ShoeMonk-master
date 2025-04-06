'use client';
import Image from 'next/image';

const ImageExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {/* Local Image Example */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/shoe1.jpg" // This will be from your public/images folder
          alt="Shoe Example"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Remote Image Example */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://example.com/shoe-image.jpg" // Replace with your remote image URL
          alt="Remote Shoe Example"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default ImageExample; 