import { Navbar, Block, List } from "konsta/react";
import { useGlobalState } from "@/context/Provider";
import Image from "next/image";
import Layout from "@/components/layout";
import FoodItem from "@/components/foods/FoodItem";
import Basket from "@/components/Basket";
import BottomToolbar from "@/components/BottomToolbar";
import CustomToast from "@/components/Toast";
import { FOOD_DATA } from "@/utils/constant/FOOD_DATA";
import useCartListener from "@/utils/hooks/cart";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import SidePanel from "@/components/layout/SidePanel";
import Typed from "typed.js";

const Home = (): JSX.Element => {
  // State
  const [{ basket }]: any = useGlobalState();
  const [panelOpened, setPanelOpened] = useState<boolean>(false);
  const textElement = useRef(null);

  // Hooks
  const { lastItemName, toastOpened, setToastOpened } = useCartListener();

  // Functions
  const handleSidebar = () => {
    setPanelOpened(true);
  };

  useEffect(() => {
    const typed = new Typed(textElement.current, {
      strings: ["Pempek Lenjer", "Pempek Telur", "Pempek Kates", "Pempek Selam"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: 2,
      backDelay: 900,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      <Navbar
        large
        transparent
        title="Pempek Yulie"
        right={
          <span className="text-white text-3xl" onClick={handleSidebar}>
            <GiHamburgerMenu />
          </span>
        }
      />
      <Block strong className="text-center">
        <h1 className="text-xl w-[200px] mx-auto font-semibold">
          Pesan pempek online di{" "}
          <span className="text-primary font-bold">Pempek Yulie</span>
        </h1>
        <p>
          <span className="text-red-500 font-semibold" ref={textElement} />
        </p>
        <p className="text-slate-900 dark:text-slate-300">
          100% Ikan Tenggiri, Enak dan Bergizi
        </p>

        <Image
          src="/assets/images/pempekyulie.jpg"
          alt="Pempek Yulie"
          width={300}
          height={37}
          priority
          className="mx-auto my-4 dark:bg-white p-1 rounded"
        />
      </Block>
      <div className="text-center w-full">
        <h2 className="text-lg font-semibold uppercase">Daftar Menu</h2>
        <p className="text-slate-900 dark:text-slate-300 text-xs">
          Tekan menu pempek untuk ditambahkan ke keranjang
        </p>
      </div>
      <List strongIos>
        {FOOD_DATA.map((data, index) => (
          <FoodItem key={index} data={data} />
        ))}
      </List>
      {/* Sheet Basket Checkout */}
      <Basket />
      {/* Basket Info */}
      {basket.length > 0 && <BottomToolbar />}
      {/* Toast */}
      <CustomToast
        isOpen={toastOpened}
        setIsOpen={setToastOpened}
        text={lastItemName}
      />

      {/* Sidepanel */}
      <SidePanel open={panelOpened} setOpen={setPanelOpened} />
    </Layout>
  );
};

export default Home;
