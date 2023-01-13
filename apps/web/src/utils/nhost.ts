import { NhostClient } from "@nhost/nextjs";
import { fromImage } from "imtool";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

export { nhost };

export const uploadFileToStorage = async ({
  file,
  maxSize,
  bucketId = "default",
  nhostFilename,
  id,
}: {
  file: File;
  maxSize?: number;
  bucketId?: string;
  id?: string;
  nhostFilename: string;
}) => {
  const lastDot = file.name.lastIndexOf(".");
  const fileName = file.name.substring(0, lastDot);
  const ext = file.name.substring(lastDot + 1);
  const tool = await fromImage(file);
  if (maxSize) {
    file = await tool.thumbnail(maxSize, false).toFile(`${fileName}.${ext}`);
  }

  try {
    const res = await nhost.storage.upload({
      file,
      bucketId,
      name: `${nhostFilename}.${ext}`,
      id,
    });
    const fileId = res.fileMetadata?.id;
    if (fileId) {
      const url = nhost.storage.getPublicUrl({ fileId });
      return url;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeFileById = async ({ fileId }: { fileId: string }) => {
  try {
    const res = await nhost.storage.delete({
      fileId,
    });
    return null;
  } catch (error) {
    return null;
  }
};
