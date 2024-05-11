import Section from "@components/section/Section";
import ImageSkeleton from "@components/skeleton/ImageSkeleton";
import Square from "@components/square/Square";
import Image from "next/image";
import { Suspense } from "react";

const QR = async ({ params }: any) => {
  const { slug } = params;

  return (
    <main>
      <Section className="items-center justify-center">
        <Square>
          <h2 className="text-3xl font-bold">QR Code</h2>
          <Suspense fallback={<ImageSkeleton />}>
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${slug}`}
              alt="QR Code"
              width={350}
              height={350}
            />
          </Suspense>
        </Square>
      </Section>
    </main>
  );
};

export default QR;
