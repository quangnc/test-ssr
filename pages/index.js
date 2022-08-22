import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import styles from "../styles/Home.module.css";

const HomePage = dynamic(() => import("../src/HomePage"), {
  ssr: false,
  loading: () => <div className="h-[72px] bg-orange" />,
});

export default function Home() {
  const trans = {
    defaultSeo: {
      title: "Download APK free online downloader | APKThink.com",
      description:
        "Download apk for Android with APKThink APK downloader. NoAds, Faster apk downloads and apk file update speed. Best of all, it's free",
      url: "https://apkthink.com/",
      keywords: "apk download, apk downloader, android apk download",
      siteName: "apkthink.com",
      image:
        "https://image.winudf.com/v2/image1/Y29tLmdhcmVuYS5nYW1lLmtndGhfc2NyZWVuXzBfMTY1OTU3NzI4N18wOTg/screen-0.jpg?h=500&fakeurl=1&type=.jpg",
    },
  };

  const seo = {
    title: trans.defaultSeo.title,
    description: trans.defaultSeo.description,
    canonical: `https://${trans.defaultSeo.url}`,
    additionalMetaTags: [
      {
        property: "dc:creator",
        content: trans.defaultSeo.url,
      },
      {
        name: "keywords",
        content: trans.defaultSeo.keywords,
      },
    ],
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: `https://${trans.defaultSeo.url}`,
      title: trans.defaultSeo.title,
      description: trans.defaultSeo.description,
      image: trans.defaultSeo.image,
      site_name: trans.defaultSeo.url,
      imageWidth: 1200,
      imageHeight: 1200,
    },
  };

  return (
    <div className={styles.container}>
      <NextSeo {...seo} />
      <HomePage />
    </div>
  );
}
