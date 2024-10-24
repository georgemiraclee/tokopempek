import { Block, Link as KonstaLink, Navbar, Page, Panel } from "konsta/react";
import Link from "next/link";

const SidePanel = ({ open, setOpen }: any) => {
  return (
    <Panel side="right" opened={open} onBackdropClick={() => setOpen(false)}>
      <Page className="flex flex-col">
        <Navbar
          title="Tentang"
          right={
            <KonstaLink navbar onClick={() => setOpen(false)}>
              Close
            </KonstaLink>
          }
        />

        <Block strongIos outlineIos className="space-y-4">
          <p>
            Selalu ada tambahan menu, namun anda sudah bisa memesannya disini..
          </p>
        </Block>

        <div className="mt-auto p-2 text-center">
         ©{" "}
          <span role="img" aria-label="love" className="text-red-500">
          </span>{" "}
          2022{" "}
          <Link
            href="https://web.georgemiracle.repl.co/"
            target="_blank"
            className="font-semibold text-primary"
          >
            GMTECH
          </Link>
        </div>
      </Page>
    </Panel>
  );
};

export default SidePanel;
