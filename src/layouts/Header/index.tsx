import * as React from "react";
import git3Logo from "assets/git3Logo.png";
import { CustomizedAppBar } from "./styled";
import { Box, Toolbar } from "@mui/material";
import { Search } from "components/Search";
import { Button } from "components/Button";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const Header: React.FC = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.VUE_APP_INFURA_ID,
      },
    },
  };
  let provider;

  const web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    theme: "dark",
  });

  return (
    <CustomizedAppBar position="static">
      <Toolbar>
        <img src={git3Logo} alt={git3Logo} />
        <Box marginLeft={3}>
          <Search />
        </Box>
        <Box flexGrow={1} />
        <Box>
          <Button label="Connect Wallet" />
        </Box>
      </Toolbar>
    </CustomizedAppBar>
  );
};
