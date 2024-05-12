import CopyButton from "@components/buttons/CopyButton";
import ActiveLinkIcon from "@components/icons/ActiveLinkIcon";
import InactiveLinkIcon from "@components/icons/InactiveLinkIcon";
import QrIcon from "@components/icons/QrIcon";
import { UrlProperties } from "@models/url/url.model";
import { getPreview } from "@utils/getLinkPreview";
import Image from "next/image";
import Link from "next/link";

const TableItem = async (url: UrlProperties) => {
  const { shortUrl, originalUrl, clicks, status, date } = url;
  const preview = await getPreview(originalUrl);
  // get hostname from env
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME;

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <tr className="bg-table-gray backdrop-blur-sm border-y-8 border-y-transparent">
      <td className="flex items-center justify-center py-2 text-center gap-x-3 border-btn-gray-border">
        <Link
          href={`/url/${shortUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:underline hover:text-main-blue-active"
        >
          <p>{shortUrl}</p>
        </Link>
        <CopyButton text={`${hostname}/url/${shortUrl}`} />
      </td>
      <td className="hidden max-w-md py-2 text-center truncate lg:table-cell border-btn-gray-border">
        <div className="flex items-center justify-center gap-x-4">
          <Image
            src={preview}
            alt={`Preview de ${shortUrl}`}
            width={35}
            height={35}
          />
          <Link
            className="transition hover:underline hover:text-main-blue-active"
            target="_blank"
            rel="noopener noreferrer"
            href={originalUrl}
          >
            {originalUrl}
          </Link>
        </div>
      </td>
      <td className="px-4 py-2 text-center border-btn-gray-border">
        <Link
          href={`/qr/${shortUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:underline hover:text-main-blue-active"
        >
          <QrIcon />
        </Link>
      </td>
      <td className="hidden py-2 text-center lg:table-cell border-btn-gray-border">
        {clicks}
      </td>
      {status && (
        <td className="items-center justify-center hidden py-2 text-center lg:flex gap-x-3 border-btn-gray-border">
          <p className="text-center text-green-600 min-w-14">Active</p>
          <ActiveLinkIcon />
        </td>
      )}
      {!status && (
        <td className="lg:flex items-center justify-center hidden px-4 py-2 gap-x-3 border-btn-gray-border">
          <p className="text-center text-yellow-600 min-w-14">Inactive</p>
          <InactiveLinkIcon />
        </td>
      )}
      <td className="hidden px-4 py-2 text-center lg:table-cell border-btn-gray-border">
        {formattedDate}
      </td>
    </tr>
  );
};

export default TableItem;
