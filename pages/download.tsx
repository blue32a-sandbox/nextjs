import fs from 'fs';

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

type Props = {};

export async function getServerSideProps({ res } : GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const filePath = './docs/download.xlsx';
  const fileName = 'download.xlsx';
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

  /**
   * use buffer
   */
  // const buffer = fs.readFileSync(filePath);
  // res.write(buffer);
  // res.end();

  /**
   * use ReadStream
   * @see {@link https://github.com/vercel/next.js/discussions/15453#discussioncomment-41771}
   */
  const readStream = fs.createReadStream(filePath);
  await new Promise((resolve) => {
    readStream.pipe(res);
    readStream.on('end', resolve);
  });

  return {
    props: {},
  };
}

export default function Download() {};
