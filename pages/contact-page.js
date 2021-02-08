import Image from "next/Image";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">contact info.</p>
          <div className="flex justfy-center mt-4">
            <Image
              className="rounded-full"
              src="/ava.png"
              width={60}
              height={60}
              alt="avatro"
            ></Image>
            <div>アバター</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
