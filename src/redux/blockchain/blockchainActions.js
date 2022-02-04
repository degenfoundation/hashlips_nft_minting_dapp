// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

const whitelist = ["0xB76B3dD682E549164F8c1F4eCDdb4186aa76c3E3",
"0xcf72f83783131bb37830201935e23cb9fad2db54",
"0x5E9f96ceC38B684BeE7634244a4679Ca77df4FAE",
"0x9AADb7733d9cbA05fe86f414dbdB6de2aED4E8aF",
"0x7198527c57788A8215875d326212Af1EAA0d4Aad",
"0xCECB53869B5879Ee98227C31652bA8434B934716",
"0x67060C9Fc78Cfd2a82D732CA4B42b41d6C07e657",
"0xaa78a2c05057a91BB18a419BEAecF4EB690306fc",
"0x64dcc9cA584C270C9EbC8B3C8d5fCA485D5F834e",
"0xbc40D4ee4b2410611cBCfD9c11C146F747fA8eE3",
"0x6802Ac27D3590C765F4424c72354C67B6D36696e",
"0xA6d873e66874780a03C5Fd7fb86996bb310271bb",
"0xe0cb34b700F7CF942Aa9A233d22A173977F8f9C4",
"0x0C911D07d4613e027B248c6F526A7CE2a6B4589c",
"0xeF520eBb5Ee218fd2c20f359ABD2d35488231c5c",
"0xD9f110e814928BAc36E2C16C681F96693baf1d7a",
"0x4C9DbaeF7899BaDC3c236121004E7A5E87412859",
"0x39b22cAA4C6E0C45b8EdF38af2579bB20521D041",
"0x5A9c3d1f0a9b6bB613B4be53A456B98095EaA2DE",
"0x26e7501381bc6012adce5ad0ab7d433641d6be12",
"0x15287D35e6978b15FB9A17Ba5cf62Fc4BB702E18",
"0x4Df86E0272aF67430dfaDd9fB6eB60772C6EF133",
"0x963319AE64911E4e5beA6EF4Cc40eeA5781310Fe",
"0x276417be271dbEB696CB97cdA7c6982FD89E6BD4",
"0xa5BD479Cc3F8AFb51b59A1Fc65dB58ec58079688",
"0x4daBC896c23Ae1fF54D07a5c734343491e2eDB79",
"0xf0c174cBC9511f0102838DFd2Fb3b86147712bD6",
"0x026bf1cE92eaf52aca9b0D701a7d5cd255cc8FFE",
"0xB2617fD2821298cC7374731797aC16A149c47A77",
"0x4812d4899dcfc79e6948e2ab4a1a242d3ecb93e5",
"0xF4ce3F01788A6066d38145CA5995F68ED9128e61",
"0x83a4F01d01C03e14645e1cE9730924a2F0C86Be3",
"0x9C802062173b02A486086Bf693186353334aedC6",
"0xe5534386D16004e7315d5D837b0E32F8324eB4ec",
"0x556681899DBB90a2E9b379f8E2929F7b558069BE",
"0xcdB2846B153a3fAa9C3e239403D6b05E835C7bBd",
"0x5E479dDA21bA3CF8cCeB03D5A0eFE6a1b6e09619",
"0x93F7698F2AD9a39F516414A891309B7a5655D218",
"0xBCa805b4265B44479B75a241C14e30819Db624d8",
"0x7828f523CFC528aDDcc76363280D2e64e2DceE8F",
"0x61b62D8EdC3cfa5036CF0647Ceb84185B2bcEf9A",
"0xb156EB700dE58cfa580018136BF8e588E965Bb2a",
"0x3D9F8318129F7C34769E923eC9c0DcaB4C0a23a7",
"0xED4C3Fd5f754Eb070060Fbbf9f3D74ed442cef86",
"0xbD25B145f362D882765B69654d9599B89c5B2Eba",
"0x5E3140262171aF854CAA9f1AFCcBB9Fd545ADc98",
"0xA1c256282e215e3040F3Fe5f17bb105C72Ec4E25",
"0x3A4031Cd2071867b69C1a36A5711A505eDab39CE",
"0xae036C265F530649332fcD80Dcf143AF958FB03e",
"0xE07012f1382B786C1Fa454a6D964Ea916d630E1A",
"0x38d01cc7d458d2fe03457621848aa5c504a186f5",
"0xF8963413857cCB0c13b9E615be9fCf3e12c7d4f5",
"0xCe384DAAEC94D43667A2a55D0F671C037E6982D1",
"0x009cefCDC28e5C1F0AC030bDf829Be1BB9924889",
"0x6ac1d0C1b75A21f458b3f1C7cBfa54c55Fd567d9",
"0x4189546d49838Fd9e2b8bA117bFCE8F17b881B4e",
"0x816e4F482bEE3b6efc467F7870C89eC891830081",
"0xdD8e7634769333D502db36Ea6f47becc1c978CF4",
"0x0f2FB4e32e814AE6918818a566CB138210709B96",
"0x92a93805EEF9E123a1668562A382Da5D0Ad1F2A5",
"0x662b4c90aB3F14497f73F2Bd928c5D9Af82e21aa",
"0x91f38a0cbee27d8403f424c8c5383391b8f8265e",
"0x79202A395465b26426C8046Cc1A6b813e28C4Ac6",
"0x21f24896B34655def3840C30065748bd302c2Fe4",
"0x26FC65a295C536699AdF66eD68D49Fc7a7a14d14",
"0xd7f52f3894615f4fc44e6b473107004e80dee707",
"0xA42Cb1237b54c42d312Fd72a4e7EB08CD8Fe1C1D",
"0xd2D350e94537eD7f776BCD8cD1818e4D8756f075",
"0xd5C4E4eD8486404DF0B22A8f72a440e8d59fedba",
"0x5e19e10C23127218695a8F67F889f97AA2DcC333",
"0xfbA91e93DA7f22D1c46F81eb684a70c7036DBf6F",
"0xA57e816F11C113c6E4118AF5F3E5e79428DD1F61",
"0xc75E7Cec3fc5799e8DdeeEb46bEe1b598637EF07",
"0x669B111C5F10Eb8395FdaAe50d7C766a1eFD8Ef4",
"0x2D212E20ec12f340D1cE337801295A7df3a00a36",
"0xebd56f0884A8Ddb3Ad47c767c5647738B04eD1ec",
"0x3a3E984532252AC3D989044Cedd26c2909e2F3B3",
"0xacFea34f99E162BBbA4FbB9298A3ED30DC7a196e",
"0x67fD8C5e6ca5f2db4eb0b57966C11D2B45F452dD",
"0xa0f66109f18e1d7abd664f479f6d8f6813eca0db",
"0xa41C1426DcA0770c4A299B6b76058B6816521864",
"0xeaEdd3889e52817093De31fd36E43dA8A653986c",
"0x6A8710B2A85F134B21Ac0a153D4c4A86FeF1aFE6",
"0x78819cE59e137fbc10C4Ff1d480203e00f5d33ee",
"0xe729e55b9137bBC87E9aEa5599675FD13c495586",
"0x379fF4D9271bf8A1C1FEeE6a9246c38340a2fbEc",
"0xCf4783e5F09958ABb4fd7ff83E1498C20385FBb7",
"0xc7d3e2ad7a2c712b355688b0022580542769d81e",
"0x6625e752b9f43e04392a51df02706c9812a7f501",
"0x3A6F68C4aaeDb953073E1054240dF87Ec7479e4A",
"0x190B3EB98F74118Cba62243bC9eF953AB53bD07a",
"0xc8081B7a0c03b2619eE83a096D6Fc7d579E59116",
"0x1f85120E342B6beEacE20C345f3736601C6AFADb",
"0x64a4A5664e7C35707765B907271633f9Edc57CFc",
"0x1860Ab87bF5D4781FF82b32Ba071E9514c2929fC",
"0xe1bcDd85ebb81d257Bbe9825EC431a59041A88fc",
"0x086C379BDdfa160C72b42D6755D59e8E6735D135",
"0x0C99f0096D9C1cF96aB01B33cb2f61D15A219bED",
"0xAEDc8eBCA135d9ff935FD13A8848858a93bB9D38",
"0xE0354CC2bD5b1a9747a24d976D25eC366c08252D",
"0x23B2Df3b047EB72e02C76302B0125d9c177e99e2",
"0xACb6Ec7f93f04C04201398d9Ab0bbbbAE545503e",
"0xd688838AffF08b8D0aF430CBb65ABbCC9a100AC5",
"0x7030AFaAAC6E09515CE2cA310d74A7B25e6730C1",
"0xCEdb80FbF916183a63cE3beC6067E6d11d73Dd22",
"0x4581be18cD63c562CD28f4FB82AC6a4E51f7B93f",
"0x517D88A1935aC068e0f0b7e1e68Fb8570d0c021c",
"0x8d4AfADf41977C8ebF2C85750216cEfCCe4eaAF8",
"0xd14D0780e792B1f4637C7c20378f4D51841C7700",
"0xA4a57609a69696ec39e46d9493a43b65F8DC9cFB",
"0x288a91f636aa3ccf62ba7486f18ad0b8bfcf795d",
"0xe879329b10478492F074f8FE8f24E9c73A393C1b",
"0x2D319e3996F0cE6C38844c737d6D5b4b5a53Ad6C",
"0x908b98e064656e9ecc8104d9879a17824897a516",
"0xF9922336E9c8C7446b1f8A57ce1ed5a509460097",
"0xF7a15E0A0e75EeabA408104De291aae5BFA81Fd9",
"0x4db55C8F9405b028fb6cA63b4694eDe51e6E14e1",
"0xF488742231159Ef94b05d9870fb0b289853fb2bA",
"0x9c8bB69A8a8e092B3c40b5702f2a7E48AaC61FAE",
"0xa709d5C6A116E46dE83D3e0FA737c79A29Cd4d4F",
"0x3A00b3AE7c431922d19E2CcEcb032303cAC54c1F",
"0x9Db68d2C65627f4510a49D70b527979A33c44812",
"0x5f312DF04b19979EF4Bd5876737cfa481A928C0D",
"0x614853C0446DAfD4448d4BfA6A742448E467f2D4",
"0x74b5cf7d83722bbb5eb788c22e9da5562f3794ec",
"0xB2Eef373152CE1d7111980685F1ab5A99A93E346",
"0xbe893aDad75DC420BaE2dfdB25d39C281E7F933a",
"0x26A186F21b291421Aa8bBB42068062f04231a763",
"0x3ecdfd3a605b8203c04d7328b45829de78338787",
"0xef5359BFf68C22fabb06074DC349F9C9B4E88Fdf",
"0xFA64CA60Cf0E298cebb64F4e263f23Ce1BC70634",
"0x4f791582FC07e6aE819e4c010450D9A07cC2b03e",
"0xb330c6F2BF999E685EA95572567BFC03Ae66B53C",
"0x872993B975c32A8A3A3298D7F17A1DFeb8aa31e0",
"0x99E40B5dB219dfd97678d25A2c88b9a41a963f5e",
"0x4fBE789Bc5E56b470b5051205ab8d739db8f5673",
"0xc078AEa779ce4Ab5a8d59Bb2f7A7a47D17a958c7",
"0xDc2162B3B16953096538684DE4eF539Fe68d5e79",
"0x60b21BD63ef0af04A9C9198Ad5274E751A33e49b",
"0x9161375A7ECc0408D0A6df2a1d6b01572990d03E",
"0x6AB173beb3FeF3EC615CB094F8bddd472a56F600",
"0x6fcc6455d67eb1884e95e5624bc5f9f4374f1673",
"0xd7D9a315C0DF7eE9b6004274E3A38Dc5Fc2d8595",
"0x6F85400663f597ebF851bb00314673348960e9Da",
"0x8cf6fe7b80252b450fcdfdca371ce26116bda6d0",
"0x0819B0Fd9813caf69ca417C435F51B8fc2445bA7",
"0x1d42f8fcf40a0d0cf063d65245e87e41cc46eead",
"0xE84b03ac27461e61E28DE6629b646F842F50C104",
"0x4EE3E1B6310055A7974801452704086C20824B5a",
"0x4b29794AFFdBca1B2013977C75D55A77C0647Fe9",
"0xc5cc8c3d47729361a146766edcc983c8e43537f6",
"0x9553803357F9441Ee426e701A1Bd8031F814FCF0",
"0xcfdd707469c5e54c3d182e83240e8762bce3269d",
"0x2612e4fb49118d6a70bde3f4188b1db12a2ef536",
"0x4752D792EdD813A6Ca7049429000EdB5Ef1a27Ed",
"0x43bD3DF4a5D448F86F2b7b903896A5F7D4638040",
"0x69078dafdbbe55fdf89e50b874d54b91e53fc8ef",
"0xFD48f221E56dE77a5DEc65E93F17196B66ecb0c8",
"0xE46d41D4427804203BA04e5e2792B85F39a0f16b",
"0x75C0177668Cc4F0C2e4Eefc7cc912eE82192Ae5B",
"0x9cF7c252Fc4cF77d00562ae93185E66322884Fa9",
"0x91083799D90C7188039b9a73BA825A307561000E",
"0x41C63160a8d557A2398654658a11112C35eF6DE7",
"0x6f54Ae721E4C06a617B4373695F0358b3FF94e6E",
"0x3edb181f9EE96B8EF74Dba8aE279Bdf29a9B77Cd",
"0x1412E322AC8E23266aAb7dE2387de477603D96E1",
"0x99E0Be2Ef971D2c93dCF1fd66e89E533b21d6b6f",
"0xD6eaa455e3f939D9421453E156B29dACdD425ca2",
"0xDc4047a5Aa56bAF5c74da0dBc6831F34F79C352A",
"0x71362355D840C5BB69f21cf7402b9cCD6b8dBA99",
"0x6336c2f83b3a52e11b66582b6e27305e5a07a79a",
"0x5f23C4bD6fF20a8CB49C5A27953f286737d129A7",
"0x11a6d44042f39a30c936da356333c962bab0bc25",
"0xD098720172d489EEdF2Ec7eD0202750790F4693B",
"0xBe9E8Ec25866B21bA34e97b9393BCabBcB4A5C86",
"0x3FCfFA468Fb4245AC4d65615840f4077b60455e9",
"0x4B64F4D2fbf249BbB87b8c198685615bf0b310Df",
"0x14220FFfA4Ae05bd0379515a806f7A68BB9fCf5F",
"0xcD7ea49c3033f80A9D453d04c8Cb78e4D9936954",
"0x1Ee24dA4a663e79B89B98a0d5692d362f4a7B463",
"0xE446195b9771caDF45E076cb696d4540f015C741",
"0x46a74f49D8000107d4fc97Acb7e5e856acE415b7",
"0x2eCC650E73D984DB98c2d239108D2931BdAB7028",
"0x8575e17FF1291ba295d1AE85668e401458fA4038",
"0x8Ea627aD337a4Dec0940c733A5BE8Fca725d1257",
"0xA4411Cc10fdee5f1C40d4beee0012Ad6650BBaB3",
"0xb53f6402ceee20c679fcad0779cf899291352551",
"0xa02f0078f1d951b54a36a8e96b726a777834829c",
"0xa81824002C1DbfCD20DBdA9B8003b398097E4FF1",
"0x040A7a22193784B738042590889a90D96E4A89C4",
"0x1d6104E868cC1769fa20BBf0DD7B3B0cd6CAC048",
"0x437c80DE67A9A83fCb20CCfb147e0E63F0b33E5C",
"0x6D9c22F408898df0012C453B2dAD18807b9869f3",
"0xE74eE0B9CD45bC6Ad819120957116422C0c62650",
"0xBA59E055e88f07A3CD5155622ad7421454998Ea3",
"0x62c2180Fff33A5154b79189e554Bf6a6b1b83420",
"0x593620ba826321a0d063ffa5d1b991a021088300",
"0x6b71e322F35EA371a1abD3D38e69e3310165976e",
"0x5C226c9CEf97C4251EABF0c23908d4E4bCA4a749",
"0x3cd7A9a357d8bD31e367A32B5700Dce0eE87fEaF",
"0x79C1673CdC00e3DB87EE1809C7C300CA668Be82b",
"0x08E99305E0acB41Fd87f9eb02636B7b8214790f0",
"0xF6EDbb768d28c9479609dBF2cbc82eeE9df440b3",
"0x16DF968465833E93200b6393723E0039f1D8DaE2",
"0xe2BB014a640EE2148B239A54072A211aA97DA2E8",
"0x8A8A534A3B884f2C7993f31d2932C1421691B167",
"0x127A6693f949DB629A24B007665dce20BDbE9f84",
"0xe4AfeeF97d66447b319e13b10B60d0470c406df6",
"0x75BfDFaB3515060F2bCB6Cf9044959FFD4553060",
"0x93d1DF5f1D7693f5f5fa906D5bdAB90a3014C40E",
"0x6AF309A8c3FaB43BE169a839C1D7ce0c39c6E446",
"0x6D75a16a457825cd8279CE4d8D475eDA43186535",
"0x371A94444a74a87a626966B98ac704497e9eC75C",
"0x11dC47250E551229545949f8F28359bDb146fd2a",
"0x3457Fd66e587af7FF4e9eff49aA988915fe8f6d5",
"0xb3AE34c23374aA8EF97ED5993651F229eA71b177",
"0x39eDAF920E12eD1e4D216Fc55ff8553d4C9d0B89",
"0xe16b78467E303402e58014811B587109C58328bd",
"0x4C9Ec5D265fa9D242A3582507CAbeee8A338dF97",
"0x93C19a4b9F7485c3f54F4a7F633Ee3Cd3dc4fBd7",
"0x0Cd17087f8Df6d2A5F2e39a94ce09812112abBA2",
"0x8F7f7c6269912610AA1CFa1fBfEBEFf1960525F7",
"0x3a93408153fa00033627003f35e8e9127ee39645",
"0x58b1e33d637d5b3adfaeb0ffe9c452364bde4bf0",
"0x969a6cc39d4eBDB837c84290C0dc2A4e29dF1cc7",
"0x90489390E28Dd2f065543927E62A38C113147475",
"0x960aa2c21d25e4c02e1306d91aea485246f033ea",
"0x46c96f581F393a64bAC1751923B78f3F4a00A0f2",
"0x54929c81a34dd092fcfc59362Ecbe6f8f66E5864",
"0xAB0C5cd24B34C663dF05b87Cf9DB48e4d8F07112",
"0xcBD97AC4618a662bb864484117124dA88C263956",
"0x23EDd47f47Dce38D714F77508f44E27c43aA4B23",
"0x3df9342166E3941624168bE9a7a4B387d40e2037",
"0x5d0618685fb636BFe4B25252Df32A430635F6a82",
"0xDC8EfD989f7b92Df5be57be1449145a6Ad14f5df",
"0x28Ed40595a8Ea50D7554Fa44052D18042b2a39C0",
"0xf94dd844bd9fd899c80385798f32560e1ce8a1a4",
"0xBE71F46B85F90AbdB76581d637f3158d5f4a6122",
"0xded77ca7967fdADae56139762bb67Cf0ce9b49be",
"0x7892ef1D1240f5332309D8c8db179254E6Efbf11",
"0xB1e0f7a314595D9263726F36400c924Bdba73538",
"0x185d2823032D8A79Bf8165779Cc05587dD43E469",
"0xCfC3786979fD93318E038dbaC87764C1f6cC145b",
"0x479019890e5867c0666f0853124453afa0c297a5",
"0xC9fC45f2E2462e8de275eF135aD29C0e68d93044",
"0x1c61C73F562188Ca425Cb1f6d943Cb2586785f23",
"0x78ed0F69D455D1E525ad6d8adEbe306BdD34Df23",
"0x9aDaf03FA676Be9569BF8DFc947ACA7cEBEcFF3f",
"0xB2fc88E66b8875f0ABa69C00A95a08A3C01c881c",
"0x4ae3fa85BF419FB30Cd5bA1b0604AD295914219B",
"0xa5137500e1BeDbcb99881b76d4DAADd54f9088cF",
"0x8572655c069B5fAc6C47CE73A096aabA7BF02e1a",
"0xD7dC91A0ccF6957E41A4eBDF6beBf5DAFd84d846",
"0x42Fcc94f371A50A2314FAfA30eFA506bee6Da51f",
"0x8E4dD80ac6fdeE8343866f622BaCB1B1F88a250b",
"0xb899E794e3d0E1c564e3C6Db4ab174DB50ca817B",
"0x9177a583D7603655B4ddF2B6f8Bf8DC710ff12dC",
"0xB123A4f3420a47d6512B65b6108e9970989B7eFb",
"0xC5bc7294eAb14C0AA2D159B00f163a64700D3Fa2",
"0x40c747a05Ab6Efd381E1721A098E68D15C632732",
"0xE6a102A05Cd7eb6c08E727D5f9A78CCD321A0723",
"0xDC77b4b03f9970fF692c57FAd633fFAE18f05f5F",
"0xFEBa9a9879bb71847e44654CFC5fA466Ce30761E",
"0xC4adF2aA25a045445eCCB2E01D890FB506d84f30",
"0x624aE79b0BC9a151Dc95e7Bbe197e63f1514c0c6",
"0x16Bb635bc5c398b63A0fBb38DAC84da709EB3e86",
"0xa966b599741876760Be45e13C32eDd29f5Fe3A70",
"0x331EaFa3f2b4973cB9eCe3A884Ccc3cB9C171ce7",
"0xa7E3058e7C4eB1b18a4c18C69983daA8D724bd28",
"0x8f6f16e7b5225ede410c0d95CE0C022f22EC025d",
"0x14275a8AD39da6e13dF5a4F9Bf129EC9EDF044de",
"0xA6E546eB09993Da07557DD1Ea80771bE4998E598",
"0xF02Df97Ea80e4b00f4AD077cEF7e349202686a8f",
"0xB3DC727d7c4fC7472Fd964d23365D56331Ba3981",
"0x9b0726e95e72eB6f305b472828b88D2d2bDD41C7",
"0x5a5f6cE7B787f8BDcDE5cb587a4ccF9168FB4a17",
"0x8F70b3aC45A6896532FB90B992D5B7827bA88d3C",
"0x5E4E3Ea640F80004831135e83FcfB843b2C5C3b5",
"0xB6c23Fc5b4E9F6AEf65214C6C6d9984f731d0C0f",
"0x0761A998210E307ed9B169EbDDD3764925248966",
"0xFea34477315EcCE44A63Ed6292B030f5A0633dC5",
"0x1ecf5141741aE40336Fa73CFd85Cf8Bb08C08F56",
"0x22aDB87531a22A1d85139bC5964C3116AC2735de",
"0x6b4232fa74cdb7714C121cb4f6960773C54B734D",
"0x68C838cCdD83b4826a0D3dc3288A10D214224534",
"0x8Addb41327317BDcAf23C50a2E6457ab0eC6c688",
"0x930664652D29AC672a61f9ffF1253cc0735D22cC",
"0x2956327a2AAD42d54DF468AF75239e5b381D3f72",
"0x88DE2AEb9f785cE212756e2B05bea1402CA0062A",
"0x3D1B369d844Bc15D7B892109179BE52F9A1b301a",
"0xC3eed344530665bfeD41C3Da668b3ad68aB2Dd91",
"0xBBfa9Bea5228c467D96c1bB0F681d446fFA193F3",
"0x651af7419dcf0729E52A71d94Cc37E6021723865",
"0x3909c5a540e62bf718bfcda853df51867490c1c8",
"0xe20A24d0518A0c77a9A397ae17192ECCDFa2d9e2",
"0x599D417F6Ac53b0408697Dde4fBC97a3686fc0F6",
"0x0c63EC635Cf396046fcC68e50782986dE23be52F",
"0xcEb81e83c4A85f1468D02340c41d0aFdBea7eF03",
"0xBf29eb12eb09297F1040e285c50A963CadB894B7",
"0xE8D391EF649a6652b9047735F6C0D48b6ae751DF",
"0xbC15aC912c4Af743Eed5C0F033824De9dE95Cd4f",
"0x961Bb9AcB2d4279cEAC29Cfd8d3Eb1354DA45B04",
"0x1a63efB8E8b52e63F700038e17909Cf76AEf5415",
"0x8286dE46AD108345C83bbB022Cbf6B2b06cC7730",
"0x8141d8Da2b2c1272a364c17596A3F6ed6D9A1a0B",
"0x808D96F234614fa8ebFD5a5CE321b5d1c8986096",
"0x0eb4b8e59e1139fa3c277aca4e93a2d9a132bb7f",
"0x4EEC614fF51eFA2b950748593b6f35Ab74B31Fe2",
"0xe797a10beF5C6658F9a9Ef7Ac5c00eb4739e9077",
"0xb0266ee121dFdcd712657068497257F2b3523865",
"0xd80BB46154264f541fFBfA87Ef8029Bd4232De7e",
"0x91BAb28C7C34FDc8efa626e3cc9216846F48B2b7",
"0x9f30251c65a683e1d7e21185aae3f6ece0bea3e0",
"0xC50F0c1aDBFE781ac7D410cEC2C6560C004D80Ec",
"0x18a6a42916f1794e5f60Ee2E6610D7bA97198f3E",
"0xcE2E2Bca719217eaa0dD5C0e1717C7D9eD2A1849",
"0xFF79b61ef5293F7c8b7AF670E23A88C3af2FFF27",
"0x87379e89e97331B36A63E5d0Ab73A2e23fbc7003",
"0xC05f22E6355506c2A1e844ED2BB60daDa490A2fA",
"0x1feeb2AF87C0993DA14a8A301dB69E8D7EE9445C",
"0x27f06bff2afd8b63bb0ae07f97ff289ac7b340a0",
"0xe49D7D63Cac667F3B013ae97cEfb000BF61a1088",
"0x1e817924A6643CA8caD5799422df2CC5737D858a",
"0x1e30597Cc15E2bE4f358042E0A0322C22521f3f5",
"0xB61cbc559425BF5F156D8c759B4a72FF09a2DC30",
"0x9ba29745775d14c8b00fec7de9e057df5951dd38",
"0x7A8E51aeC22F67d51ae41DA6da067B2271d9d4b1",
"0x53807c11A80b4af9a4dAbd94A7058B1f25fF174B",
"0xC718795C11dE0B16076663f0b570f07f6c5658A5",
"0x1246B135d22bE6dD35906f6dEE758b7c8a139846",
"0xDd7477fc7525f38d791B2AFC3eED3a884c1daAFb",
"0x561A9d4Cc9Bf5C04e93b71464fBf2c6291181325",
"0x4f1A62b785f665D591adAAAc8aB22E7e7A8A65CF",
"0x09CDd4b0A70D9F92Fa47D17c4A58e81430a64C51",
"0x1058fced97517dc3e2778d701e67dfa0c6c2af09",
"0x1a1743bE45F2af484E7a5841Df6Ab5dcC83649B8",
"0x7FaB5B86957AECAfaA82BED4079eb07df8315e7f",
"0x4d10f9F71dd4c0a7C35a7c377EEeA2117A3Ae8db",
"0x80ad50d8dc5fb94ec90f7d5720bcbca1733dc9b3",
"0xd0b8797791584e5caf1d8e978509f53f3295673a",
"0x516332bdece514e443d525c48e2c8b678cb161a5",
"0xfd6aACd2475fcB4797c9beB6BdF909BCA2af0408",
"0x56061DE24b5dcEB6B94561032b75CC61D7c2807c",
"0xFD03b7A7f7Bd4dB6D379f8149648d3B066ea5D73",
"0x0545d0c15F48aD5FC09835810bbc9957f27AA721",
"0x531DF7Bd398F7f9e5AcF1B92A1B8C1e09FBa4273",
"0xF5177f67E38Cc3F1A10D2177B4fbE41bdeD0ce67",
"0xF79A145aeDBb3F541404257019c3fb84B1a1d03F",
"0x47b20272EBeE4233Aad387dd88Aa80DDaF55032B",
"0x927c2F09DDc5aACa143164e8CC0c774eBC71b0Ac",
"0xF2E38Ba54f14a7DaDE2ECcd4ACBE20F04d94A81E",
"0x97F9D06e9dBEC11784cF31121FE1b544D0eb9e0C",
"0x56C8E6e7bd79Fc9FA667f83f666E0a122A6Fd31D",
"0x1d52c0E4888c01c5B26eFB2E68a137732A9495A2",
"0xE99a22F492247E857FafD8a74AF32c79262A1ec8",
"0x33023b6d78edFeDe26Cf9f14c259bb7638cc1318",
"0x13E1039d18c922aBb4c6fE390C0191529ba5e785",
"0xC825baF5a4c8C02B28eD9118dC0381A5f9ED0EfC",
"0x64382d9a35582bde2dd3a467136b9b8feb4387af",
"0x5f8747647B67De9a4A9a17e74432797cAe05B59F",
"0x4561c83fBd1aF7c4ce527529F72A957eec16dA1b",
"0xaCad0ef91F8838eb36C038EA5A8eF546A60A9c60",
"0x7bEDfb4CFc05A39446A45fc2EacD0c3aAE65F84f",
"0x9Bc33E53e465d6F1a6AB3bEDC433D65b34d3B9C2",
"0xdBbF67bD2d786A23dF2AD3335CA2C08389EDA089",
"0x19aB86942c1eeF49dcbf46e254B48be0E270746E",
"0x9Fa7C656f69f9E6348aeBfE746eadDc5e9837321",
"0x846a980a05431d6805880ECA1A3Bfc72f91646DE",
"0x30aefe223c3d1e170ffcb8c326f26083a6ec710d",
"0x9335a490758EE9b9C762954eCa29262F1c9b07F1",
"0xF43638610f86dEC54141e3AF07f0254385e39F55",
"0x24557e647859E8Fa14b69Ab7B7A5594c90eF694A",
"0xCF883872328E1F354e8c8E36B487e84f92092aAc",
"0x6D5239106010e9A3A7d70404de49924d66d4e27B",
"0x518354c86a487041237084a1293ca48d2d581cd4",
"0x89BC34A29a5aeC73DC11a84054880C34b872EDBB",
"0x5f0d8df1E9F5576F94DECA62c1CFD9A164dC134E",
"0x22889f8C74ae7A4DAd0f304c8ab84Da11740b963",
"0x23D47F6AB95504bDC34704c99D202b9ae2aA2897",
"0x8c4dcA2BdB0f78BF2a0477051e1C270bB3e9009d",
"0x67AE517Bc1b86ebb728A2Ea742eab338cb12c4be",
"0x534AaeB3D85c330CB6Dd34cC7265144069f36442",
"0x15Ca4ED8346596D7BD93114dDC1C3017424c914e",
"0x75e41101ea6f08019CFDd8182E01d52986Fa6704",
"0x733a179ad13BE6A797AdB482C94C71025ce7E1A5",
"0xD0Cb41a92bbE7d75500660d037206b47a310556E",
"0x0262c71Cc717Ec617190424D99a5F73DF54fDB8b",
"0xdc52ca73d03D041f27ec98B778261117d323ed5D",
"0x5B7D021869b262312DBD3ED36222F7240B14cEe2",
"0xc8ac8C87d6740E382CD214041035e829968ADD7E",
"0xD078838FDA1BcDAC629b3eA9F9E0763cc1eEAc44",
"0x8c3B21CdAa97A73aD89115c63D6b86D1cf0B22f8",
"0xe647AB2F780d5797874Faca4af39c3aa4939D716",
"0xc3286F270849f135f5CC035C7423b2D89C35b306",
"0xa315b14CE102861aD07787Cd11a625BF91b2B626",
"0x494edBF45a271107F0fBdd05225Bd4C71E71b351",
"0xd9b05CFc700A3665a8aBccd0725c3436094C2b86",
"0xC4b6A1c79e902f438e44C22149C7A4Cdc794a6ea",
"0xF01df43B02be63226BF6aA5173685eE78236C540",
"0x869A60fC797538EB497098756C7de91793a48ECb",
"0xB30eC84b95EEAbC17ac32969332412bc6265bE38",
"0x621D0c7048997c8703bb52F4A219d638C80b5F6b",
"0xB27181270f1f025c4f3041E391e0Fd606C838253",
"0x6e29DFD2B1c03439e3D9e7bCD261d35f8ed2418e",
"0xBAafbFa8C71DbD35288EDBfbed955cA20ca006E9",
"0xEf551a865F6bcBE5D3b993971dD829A9eaAec85e",
"0xE85C968Bc0dB9F8138e925e333c744966896Cec4",
"0x882C7d77c4feeFfcc4F649594Faa865e85BC35a5",
"0xf66405C0b62C27eE3A792Ff02F4EbE3936758246",
"0x0D048fAf8C96a38aE725E163E82F84DF393193d8",
"0xa5bA5eA85eaF0Efa2c7660558EA3CC2cA1a93c02",
"0xbd27A0Caa1CB86Be8EBd79Cc4475681f5F34141F",
"0x0958c9d7c60f83D73a90fA33223e163a0e63648D",
"0xDd8D1C4FAEa5f120d0A2E6FC5Eb5180e4534c145",
"0x471A2C3C6dEa73e8F7f077c68916880a6896ED9F",
"0x43a870b7464ed3fDF0f653F2A09787fb6dA04277",
"0xd7F3CC7616b0C168E303debdFd0Ab1Fae10e971B",
"0x5020D3A51611988F5E57df8B2aBC3611cdE4b59E",
"0x8773b0970afE7E31574896F615109C3f4326a673",
"0x341759716244035E5e707af66497bf324B0Bdb53",
"0x14c9c0cc1B9183e6d2bf92bF6FA2364b47201DF5",
"0xE6e536C9cf50c645cc759397Fe801E3fD197369C",
"0x76524E66A664822ad30528B08a7Dca46C226ff76",
"0xf6ad2e11D2D935684bB7B1C8cA9c61cD21a17bDe",
"0x1fE80d3e80E66F63914dD6ebDfB7cbf53c28668A",
"0x4BFe86c9B4fDBdB87859082F5Fa5d1903ab0E375",
"0xA755F59d6cEDdF9ea7557689F9f1fa1Ef246B9e3",
"0xc84036C5A122b5486DcEe7ac6db4e41110f61E2e",
"0x79CB1ab1A43fbF624Eb6c2f6F92332597c379bc2",
"0xc604A989bc886A4e1f2d5767B01300fcE6dc73AD",
"0x8723B7fd03dCe5869f076f78fE44551C4147F029",
"0x2EA29D8C8658F79bD2979616A65a70850e03cf2c",
"0xbD3c46aA3364aFff4B02BF6E0331346E885375FA",
"0x40567fbbA4Ecb64080cd3D8a8b6E144A543ed890",
"0x028f10304C5db7108D8E4ED3d6fCdC074a1193D2",
"0x760eA0631077a3FcB28B2B82d565cC9f019b0820",
"0x8062ffE7F77DAed0be1FdDEe091ce4A5bACB4461",
"0xD4A5A33a8bFE5789bCFd3b08C94D993B95B3Babb",
"0xc7975B84C455a9640187d165cC5fe3A22A8c0fFb",
"0x3Aa56aeD2e1ac5584fa72D2f870b79dba15CceaD",
"0xc46956b304F122D014f7ae052A615d3891047Cd6",
"0x7199d6eD85b8f24326699F6890B5d6005C5fc78B",
"0xDE4ceba1e280EC01F115C6782EE2E395e3D53cEd",
"0x8D1a8bf08ff453d455bdBAdadc1437E77cBf83Bb",
"0xa99FeB1a79043Aa606e71c02985EF7eaA81f9533",
"0x8bce15d3aDDdc060f4E55b8AEd72a2140468197b",
"0xB6444e585a7BD87cB532eCbf19887a699c929394",
"0xBF85aF4A8028af3c0F87Ef3839bBe29e99FE787E",
"0xFe5C0cd626C112a0027176549f9228cF77CBC616",
"0x14e7599c6Fb545F2924FAc913520C6976a766F62",
"0x4c67503f189582Ef647f9351848Ad85E672A0877",
"0xA8B34999587ddaf8868f9e64bf363A0E8192eEB9",
"0x68A8F0645745cB5e852c4D35eF7B86367e538eCF",
"0xBe18D55a8cDFf86D2ca212C53c12fF6Da837364f",
"0x3313bb1f4D4f070BF00ffD4733F85E7C7E50D8D9",
"0xeA41aFFeF8E36622A58c4813D83b59FDBd8b6E49",
"0x6d5737383F06A78DBD8825656C4C0581C924DfFf",
"0xCaC38456cD733AaD505048bBDB62D50047a0993A",
"0xF4387Bb6bCc4b17d2D01F15Ef4aa3EA72f4f8dCA",
"0xFFb8dD9e1565284EA30b646a1f0d5BEF74Af4354",
"0x40C9E701a275C6962a5d81Eb935471369d82c072",
"0xA3F1B620dbc281c8A4A80C47a36e19b44D20E149",
"0x0E1337f7357736cb217b96dd47898fDDd03a73DB",
"0x324f4a474A77D5B1e64dC897f0191E453d3CC2c1",
"0xAEA3c8Fb21bDA5D7f2E9E12b88853a67d01fEda8",
"0x0C510eF8b186008fB111b27305767c305Dff2fB1",
"0x1D313B53f5573abf0DD81B9a30FD91062DE0867d",
"0xeE59C734d40fFB847Cc6B6973d50F9be10eE4a94",
"0x083c173380105194F33261291826f7b61cf860B1",
"0x23003F66813BFa87BEA6A4d4B6fEd156352E054c",
"0xfd73Feaf2a594E122c93038C9080D56590CA0d94",
"0xE7445A8F061EE771e1AABcBd3958e21b2528338f",
"0x210A836B207cC0eaa0e83417075CA3b7d63FB268",
"0x14Ee109379D30346480C4D97fec713D47E2FBf3A",
"0x7F85d132E9cc74454741fC6B04C1fc5a44dCDdcb",
"0x34C9B68d89B325F0F8eb8dC09c1aa9b0D2e4fD34",
"0x97d6183415cAFbfF08e391ADec84De3a6436fe16",
"0x77a6201a3bB4f21DEd46522Bb984EEf6fC3b4232",
"0xCE1A5C7211184E843139dBb0AB4F8104F3e9513F",
"0xDbaEDad85B3EB718bee4347d119855d1A0be0549",
"0x7Ea99063e5Ab67A8Be6a2C726023BF2EAB77b0D3",
"0xD98d4661e17235C5ddA210559B1Eed7e4698C709",
"0x6052d1B30C7E028a861B31FDdA17E44528526B16",
"0x2AD1B8a48679822f0BfAa2d36a75DFC930B52CB6",
"0xadb14041fC69DcE0B01C994DDb9eD22881fBA53E",
"0xfc1aFf88D5a07023e1196332b849d71217340A8e",
"0x64293658520D72FDF12bdE5e55ae7ABd9fC36cCC",
"0x2bC245880ABaD127E489242e69dCd3C4E0b02482",
"0x3457C198a56590c0720208912293337F41a7eA65",
"0x97b2AD8c3a5e107686BD8924827B9b5eeAf94dF0",
"0x7451d13d5bc25f8c0e77a9Ad48B6c41ae47ca8dF",
"0x3D3a416057Cff24a76490b8750974d220A441588",
"0xde32C78C54159Ce4150752F3820584bE5335C29E",
"0x428686d0D926922d95797Fc854Fa604D51Ea67FD",
"0x9cCcF958991f89761a672aa5A3Cbc72889Ef0274",
"0x6cAf94589e85251E644B8cc62bb01D6AB5c200B9",
"0xE715547C88dd6A9fB8bCab8E9a8fCfd2E24D46b4",
"0xD4F6d643a4FCDb4F1Caa61Bb4991cD8eAFf5c0b8",
"0x651F8442Fc15D5A65F451C22F5555eFcB8937da3",
"0x9ae69385eacb679388f3FB3e407397d6F2b8a7D8",
"0xE5E742Bc2f3AbD73bf80bbBFe71fB759DB5ebBba",
"0x7E7f4282EbDF6D0a2Ff505c6b5e7376199873D4c",
"0xd5A7c61A40195Ae9c2E396126A31Be5B14dc6c67",
"0x6EEbA3d0820c3f7bb041C9914B303e201Dda77c7",
"0xA5E8Dd3fB57530d0bC7D173CF8384872e30239C9",
"0xF807EF4D0cDFE89ddD10807074B8D4fC9C339f17",
"0xC010EFaAE4e011B08d69eC69e349F16d469b14D6",
"0xBD3CFA8Bb6dF0f49bf8342596008a5846A639134",
"0xDB62cb222f472CD4fAce2dcD8E2a4A67efe0432c",
"0x7BE41f1CA07616E75094c2468f4A561716F23c54",
"0x7A68b6E3ed6735B6E00ab1630BBD156610CdBCF4",
"0x41c99b5daeF2114Ff06DF5473A2eE9Cb9c639bAf",
"0xCA878e3Eae0179daCd43660f225cB5FDe7f97F12",
"0xD822DCB3b901Cdb7B5699e914e84B9E6bE8D953C",
"0x14B63B8D5D35eC901784438d6911Df1207AAa647",
"0xb81D292a0B915fB46c477a102B1E7e0dF4F340c6",
"0xFdA522Bc62C5c07a64208fb9d04Af5B0019d5bFA",
"0xf6AC124451B675c119736134A1d9d51F5098F6e9",
"0x862EACBBa9AE1b80D96176AFEf6f80A6A9136742",
"0x93e9Cb024a4Ec9af284A7996d454C1B179E4a7CF",
"0xd597293F6b46Eb8Ae8102e9C2B6a3CAdEB12E146",
"0x3E5f44b54F15B535B8063b6Cc4A7D96F0A54c3AA",
"0xEca1Cb6f6379A5208Fd5dCd35455FdE7C9e94c61",
"0x9CD5aecF6Cd410918f5D6aF373cb433A973f085B",
"0x50C0a530258415408c3eDDd0f53F01F5b230D5D0",
"0x32A0EFDcF7c5b3371f5C76C834bEa6f5dC64837A",
"0x2F0caCcEA5ca9330B269cc99239E91955Dfe270d",
"0x2Aaa095d99274C37ea624da596FB9685E0f60b7E",
"0x0cC3803a8EFeB95C42809134B72bBa98ec91b6a3",
"0xD1eD858b83f94cbA8AfCB5bDe52D5d2D1990060A",
"0xC04eA01EFf13185E64295fAf9746B7efbC833218",
"0xE734326Fb7dc82D27ABE6a3fB1E8194288734030",
"0x0b9301f5a7D89481696FD862e5C3aE29867AD1a8",
"0x00B3FDb024Ee70B9FeB9CDF24DDb932205e10419",
"0x41610435bBc8C01f0EA092e6e9D08047cb9f10c3",
"0x3a5D13107587220DF796096Cb76889826e1b55a2",
"0xB4AA64F4bAF74BDBB094DD9c45EfA221fd70b0c8",
"0x7A4AD7E218f435e0e95F0070F60bF97C7D01878d",
"0x8827F917712f017e2D71164E489f50Be29583d7E",
"0x1451E471A7291721eAA2653530D787624C9DA730",
"0x147c6624D5D537563C1683894E9eB3F9fa097fA7",
"0xCaFA5f02Cc07FB2e47aE87821E8a9CaA372FDED2",
"0xB15c432d36D3976156d4a8ECBe9b136D7eCC2507",
"0x0D6997dDCa28d8747dfDE5fc368E305688aD7695",
"0x70B15Ef7D67967809052bB7908bc7C64CB8cdD80",
"0xe5206c4cdE2D46fDFE247C02D758dB28a7abf95A",
"0x7332F7a30918DbDF693058435Fc246EfFea73576",
"0x1a77e72f0Ca846e07E018E9B8c4b14C48Fb90211",
"0xB7f14c739A90E557B189A3ec053c7A86516E99cA",
"0xc072518Aaab53330Cb339F4B93713125116ED283",
"0x1b4b9654667c8E0DCdA3Ee88567d11FF3a6a714E",
"0x1EaEc107Ee0Bd4ef49f98080d8F1C5975E763cDE",
"0xc4be07d1CDE1C6cac09Fed4Df57b9DBD1835dD39",
"0xC52450dD359F8468aE9df1ccAEE1673CC3F00408",
"0xc2d706C5d8e5C60Fe59caf67027834dA48f2165f",
"0x67Afb99557BbbD487f59274ABf6ec037c6036F77",
"0xAF56778B83A181546Cbef855A36D654E5c3E3DF1",
"0x25eAD8d1d16c07F121efF3cECE56a2711e187e11",
"0xDE3fBE14B5A10a1E3E97c74CD1F4E6C6013E203c",
"0x6649A39Bf344e34cE04f23F9De31A4b7B7f38E4E",
"0x18758A3d6007f52d993d66cD4BCacF7d04214E25",
"0x644fa2C1a50A61986CF2F889bccDAf0BB2cE5373",
"0x86479a8D72d5180665f25A2adf44351E58c0bE3A",
"0xBf77282FA5C014B7cEf018F4bA975a416580CbE8",
"0xd872e4E5E6efCf0d720c36a7B89B1BD965b4dac7",
"0x27ab758eB0a9b4368B4619268B0E96a6FE369078",
"0x9f3c0A084BEe7F7bb0268526e106e40075A2C786",
"0x83df518f98B3961a5B6107c8BeB13A86b4927485",
"0x358Ff0D8438E64aD45546D9Ec109dbAaF2fFF250",
"0x84d3448d2A0810F036Ce378f9c74D9fA3F2765D7",
"0x538dF652B134b0BF803fc1D17a66194ea60B8c55",
"0xC906936F2c0a2444532C8b79Dda53B124c9a12c2",
"0x1df15B6F846D2A5F92EFd452582dF187A3ba379a",
"0x0c9200D96c4E909143a813E3891c46Cc152eD8dB",
"0xFBDC47661Bc97CE7B2E4331c9d3A64030a509c6f",
"0x282526d6fFEE0264Af7469bb2B978Ee392B1C814",
"0xa03C634333474fc0dEc5F8f87820Cf4F411F0d9e",
"0xD90f4b37FdF3375BC715E61637B2d2a028095e40",
"0xc2dc9aE2Be4cC75AF2e12b322f5a922a38499556",
"0xE7B54BA100f02EC9193CB2236e789ada6b002059",
"0x4967ee68B14AF27803B22C5245243de2dC55dC05",
"0xD18dfF76324874a67b1376dc3FC918d6BC2A4195",
"0x29AEE4556aDa4Fa726a33b52aA052c01d836EaE6",
"0x8B6c97593E1ebfd0A2907c650F0F4c66B62aC014",
"0xB245213001b73411F06b9856fAE1d960BeCf4953",
"0x1678CA6772324623284BC2F40c1147547E70B4fD",
"0xD0d35EeA4fb0f0a26382d8135516E6b0F3e43C0b",
"0xC7899D23Ca4724c231188B14a7DaEB8f26446DB8",
"0xD5De605B2Ac69d3E25336BF1877B1c941D6b3C1e",
"0xB091D67524322B8f8Fa66f3d7Bc03b2f95953F0f",
"0xA3352F0991E79B0d033CDCE01A859FfBB5aC5D53",
"0x8DC5B7C22636C6Ee8Bb1a08169c76f41680b3f34",
"0x26Ec1e1FA7DCB2A240F07BD03f7EEd763E5e72C8",
"0xB3dF4F8Ad8709a4d6FD982Bb8b2D6B0e9512C4D6",
"0xD05821D9C196c2CD96F68a2e9253d52Fc2b27816",
"0x0BE6CFC954b2A981dc9408F3C23a5778A7863973",
"0x2f31BC4A6061Fc2D041a3e549Af1DDE4fBD03CA1",
"0xA47Ed27eDBe3Cb0282b333FFd28331D1ECC69C2A",
"0x8F22B71ad1A7f257cb1741c1836391f0C26bDFF8",
"0xAB0Ccd317C3C41A388B9Bf1d4015F08DBb8422a4",
"0x33a757E2b100a7891ed0a4BE982DbfAC7aaf7327",
"0x560056372F959817f038f31C3993D57dc02605D9",
"0xfC54829dd57d6306024Eb9d762e574918A9aA6AA",
"0x8bEDa6E2EF6683A478Df79EbD82E76CC36ab23F2",
"0xA19cAB32343Ad583b87851409A3AC015Ba4ef6aa",
"0x1b0E9F5AeD0e527460fB67d87Cd8e88C8e4Dc93A",
"0xE2318F49a3Bb14F69d4f81964Bd8Ca4128fe3730",
"0xD4d3Fd74421d6BF941e531e1a23Ded613129cD3f",
"0xDAD8D7D71C7F163F94A5bA1e34a816FbB5988E1A",
"0xD5c483e0FD4bF46b7ad975B8c67cdD8c5DdD5930",
"0x7fC4A4C6D9b2Ba993d5bF9ebCe9808b282435832",
"0x63E3378362C910aE792F4ef5D1169269da409790",
"0x3669e28B98Ca83255A006D8C20DeeaEf000DCC61",
"0x63dD82ae1424C9Ce2a0D317Bb5798108769C4ed9",
"0xcF580DEFee4396ecFB1deCc07366FE33e207f3E3",
"0x48a291aC856490D472a30bc9e037Db929f8dfdd5",
"0x921ac76DF0a15F8C26b3b3471f9b9f5703D4Af7a",
"0xd968916e3bF0E8Bc7415a110656C6b5735a6f045",
"0xd5DB2aB1d8427Cd0031cbb8eE4F91Bf2eF1a3DDD",
"0xabf5767EA42a1221507131A36C399A2Ba2b7dd88",
"0xedbD4D620B30120eB01A547bA7D912eaa8ae3B49",
"0xD8695fADcd18AEeB426CC58B390f7d20DE621bA1",
"0x6B5cb33268656384Fe2ab899E3992b48f38d133d",
"0x9574f033313f4c302ec6501AEa921a8F6229661D",
"0xe2A0A3187c90128C07e39C437477eAAb522d3D5C",
"0x5B19B9C2453d57e65c18A8C19DbF065A6D2e7C8a",
"0x92A3e61D8B28c7dBbF32A4249fB4b2CDEf55c7Dd",
"0x8DFAE655fa08733e7FC2D30c54ea749c9c26C37d",
"0x684f818F5E529BDC291056875552c89e4276d6bD",
"0xFC3d3621AFa349360696AaB3f919af96c35b6969",
"0x6D510e5Af01661546a53Cf25B0Ca962E72cf435b",
"0xC50418eC9807fF6C4F748fe5751F00c5a335FBad",
"0x5B590db729a1771117144080AEF006c540f40fdA",
"0x65caE4f6FCC2f7F1713756591c6506e068c47Da3",
"0x4DF2f5C10BC72F4A2C521ffF3F305AE9FAdd5590",
"0x9d2bE2a99413965e6643B901f3d066d3c727D107",
"0x3323B7DA4bd04614FfD5EAAd2ac03D1E2f7F13a4",
"0xe112c63737Ffba793a4874fA577455C0E3F07A71",
"0xFeEf8a35E82e0c49Ad7a794246E0b0f4982ff83D",
"0x56a9a06FAb4F0eF7439d46a7dcc740f1Ce5Bc21D",
"0x88a76E60d0C1B47330d7047DE31233cDC32c6ad4",
"0x008D4e41Dd6ea4792B41981b551076572279A167",
"0xb4Ef6594C71f28B5F8A92c193F17c0e2fbCaA819",
"0x0862095F8a10c332aa1bA3d07Ce15A38fd1bf652",
"0x69378eB02bEF5755851DF26CDf8FE45C71c6D0ad",
"0xE7Afc03508f8D08cEe34e5A4EafC06C4eF231B56",
"0xFFFcB2fdB45959687C381f30894c91b019a2A06b",
"0x002c141EB412f9a05Ab0132fBfd9377c6290Cc9F",
"0x04e6C5245731629A875F41Eb23ab4bfeadE1a2Fb",
"0x48B9eA113dCB5209A6200A5EC936B92DBB9Ea7B5",
"0x97870214C0b12D36c03a88350A2fD3A2dA291213",
"0x3bAc75c5D06F7273d2C67Dd63B7E6cD7f190484E",
"0xBaBE8a808E6f83302BD6863E5A7c9DCa05Aa7Ac2",
"0x30a94549187f2485EE0601fDF6d29450100b0Cdb",
"0x54344499681dE6078153b736DC66Bc507aD9fc5b",
"0xA72472F62BdE37b59bE6c21933d030E88271ccDc",
"0x706B8990Be0BEd4E53A4ba84DD2d446aCB95C4c1",
"0xDb1374C7E79ED496Cb1D569490841a2CaFd57f52",
"0x70031A864B0506a2d7Dc81d648B2d739F9D8265C",
"0x44b057cd67Da9Ad66006393539964700D045812E",
"0x2FeD4B8f84B385CFFd3838c2195883FDF8ACE62e",
"0x21415fc5b2940756EDdBF0567BBB7c42954C8e72",
"0x4d52864A2Ed574597E6a78a9ef1285A8659c6f2a",
"0xaFF5971916f9c59ba68b90E50CeCa00B64D869fE",
"0x88295788317DC80E5fC5429ff69d499c7A906D6d",
"0x4D97D50159b963CE7DE405934e1584459f8775cf",
"0xcA624814a7D625F5018f5e41eAa267720e8d3Fda",
"0xf35c593D1eC44FD396413EbE9cba674AcE8e3ddB",
"0x571FE17Bd941714E46759D6aA6c6fB062abc77fC",
"0x17bE18bc317F45E743E1062fA1475245d763C27d",
"0x228a8F3E94FDAFdf5b0D2c1079a2e03a68E96cEE",
"0xa599B7CAE5c4616FEd6644074d9f1aa0d5884932",
"0x47acA0a3A21e22a266EC7A7Fecb7d991243F2C6D",
"0x2F79011E1Ddd0B10caB4Ea19A9741A915EA13163",
"0x56266F76017F72c7257C63ef8032508B0b670206",
"0xC95E2cD9Dc4A77D58310dFe025Af5293D882Aa40",
"0x15CacF70E3Dd3eaBA1788B202c992f1BAba5E6df",
"0x7dE1C3bD75c6653f2c70F4FF05497aA84b69Dbe3",
"0x75495d9ce00160824683EF2D343dd3bFfB356FCf",
"0x201Eec0ad9d5E82352d5eda8825418EEF1Dff59f",
"0xaDEB9b831C5F9660809e20a450442286836ba207",
"0x9E9eB26c2D307d3B7F4844f6AadC5B85696ea7B0",
"0xD29a20Ad156085AaDB2b3b73A7BA86E7dCCD7E0E",
"0x2DB8B449548622d4219e8A284EC2a4810c7860d1",
"0xEc3C24488B8De4feBb2C66aD42fc89c6552C1d4E",
"0xAC21186938bd488174d1E0f282c75E88cb12E113",
"0x48b95B4c5B32a6D30Dd81dba23F3406DF1e6fc2A",
"0x2D49b950920F667ec83c6C1a80c355257FADd7ef",
"0xEDc21c4137631224c390091D80280E984ff950f6",
"0xA52894Ce4451e4F4BAEf98241432B78D5aB08195",
"0x473CA8150553772d628E7E8e880c7Cf4C88F7e86",
"0x609a2f5c649C97b79d66d787d476090c494caDcD",
"0x78CeF2259653c2299455C2c79B113D3eaBACd9C8",
"0x5B677D9789a3366C5BaA264fCb1e3c7D0E5A42c7",
"0x4C4bea1204b67994E2B70A0Bd4aD8e955D835A20",
"0x80457Ca59B1bD1E8A18850917Dd726fCD2E77207",
"0xfb9f9E308107d8001c95b52CfFF4133839c97210",
"0x88F4FCfa7364Bbb95D011C206948a84561b90350",
"0xb28D3c293a4ebE90aC4488E5077660458Be8fE9a",
"0xBDCd45e973A5F0eF9d0Fc0B7D12Ec693c5543736",
"0x3d85accB10365916a1Ca7Ce4F93CF81f27E5E998",
"0x8AD75d8AB6FE71bCd34F9E5e1D185E8d7CA51eC6",
"0xD9B8f7702c64fF6a444C54cbbDC0Fa478b16d4d3",
"0x1dce80A75A1c8A427edBCbc545466286856864cE",
"0x27676e5304cA8Ef760cb62Fda71C9F6C7Ba46FE7",
"0xA11f8C70c12101300629fB45f2C3c9353ACe83FD",
"0xA9fA65Feaf6afd1de235ecFc55cCCe8E37d7f316",
"0x5E55bEd0243aCb197F9057d6FC86F81bf7F66747",
"0xb61885EB9A86Fd4846c6740eF77E206DC67Accdc",
"0x9da89B8889acB012B14D017A0113c07c4Dc5A340",
"0x950417cF22359940b50286ff48F18A64B1FF1F0D",
"0x98536D223Ec1A6F141866Dc71B5a26e9a583B3e6",
"0x6DDAF091BeD606B7cAC2d4695cD4C3649aB82B01",
"0x877081a5872F6de5cf99e4b954aCc4e8E516647C",
"0x94B8BAf655F9587E9942befa07FAF2F0538FA039",
"0xf56bFeEEE19c827Cb4c0dA80Db7D697F04cf9B64",
"0x4978E4Cb2Ca6ee7C3d86FfE1ab4637Bf1C80E6C1",
"0xCc2f894B85509cb2F39cFC54C1e8b075424bfb37",
"0x72CebB9b7a95AcA951641C8E91b87599850E8e79",
"0xa964700C0d585CdA5EbaF3810EC72068A4E265e1",
"0x12E0c874cf58d4F96271D949582C95Df6Fb0a32F",
"0xbBD81100E687c79B1D8Bb0156787A8C8ccd500aD",
"0x2A9F655B2DB271c9ae32B4Ded1Ac75dfa2979964",
"0x0103741bDb0657e187a40cbAbAaf9CE8f81E49a5",
"0x0DfA24DD60FBa55a190681968DAafF5Df08A3926",
"0x1f82E158dB13f735DdB018A2F97C6f6c7f7973d1",
"0x695B215d55C0C8C23895e2D8566941570CdF5813",
"0x55131C108b4b24F24d3674d322c1f654E6fe71af",
"0xe0cA83c0f02B1211Bfc3796D536074C6028AA3Bf",
"0x53b7BAe518c225E7D0d1852608b3F43043860BbA",
"0xf70ABeA4c4096AC5993e5b8Beec7e71ded84D1a3",
"0x67CA8A13dfF536A823b80928774c117De572da53",
"0x24370AFF3B2825187b364b02555eb41393D3A026",
"0xA7489992A67cd902E2D01c7E1118b7f4DDd54c52",
"0x86CaF832a094b2188b39c3cB19198Ed472A0209F",
"0xC5BD6a6047243acc6dD9D8bcFeAE80cC4AaC1286",
"0xF767547d76c3d58368dD884e96e5Fd92aa7fE5f6",
"0xC9E76057239Db6d1Ce5AcB83834f2c5fAe32c873",
"0x8B9F533631B629027609d52E6D5d4b5553F72191",
"0x3Db9323b979d604A5E4639B431391aF613d35B2B",
"0xaaBB87fC6dF5fC18D61Ea896047DB196fC3e5626",
"0x707e8B8FAE6f2C2eF8f94714D02951c030811905",
"0x56dba9B85a5a3Bf6b9Ada0c188B2576545bd12D5",
"0x8a49aF140647B94a4c14a86383D6866d0199fD1e",
"0xA194d8D27cf33De3512eA47c739C3f3694c0EC46",
"0xC0aDbDC8E5dA8E81EB8Af426eBd17e307a5808e2",
"0x2db4620DC59E31c7ddD6100AE2cC74CAe1234B10",
"0x6378537bFBB68774223659AeE8Ff7553C9EA714F",
"0xEDcf10e6Ba7280A4e2bB7731526cD72235603638",
"0x966D00ED5CF9d914586f29E3699B3b12eFd37CB5",
"0x8a6A322671D9111E1F24cFb0Ef84F0bE676aC2Ea",
"0x6077296062e12aB7D606c356F430Eecbd36B3B7b",
"0x6e6E60d58bB3108fcb812A42c7ab2b40f3880E1b",
"0x37A3c7798D987D48C46e1219170B91a9623224d4",
"0x34D746D624a2Da90B4CB50F7Fe89176C1901f23f",
"0xBf06571c4292f056fED66a60900E45c52e5142A0",
"0x128b14AB1170Be25b02c3dd3B0eb9a90a6dfdF36",
"0x3BcC0E01326908cfb0bB6F1B67810f32EE54F1c6",
"0x2c2BF08b69e61b44470533B7c0e6BAB4A88dbf9e",
"0x9F4B443CE79332E2658A7328Cb35c9f2297BE211",
"0x3fea961a69a84c51d150cad0a4422a7c64fbf935",
"0xAa1c2330669e766273340FC6C6899ec93E9FD784",
"0xB344a6f241eE18bd44d3Eb348c48CAE1d77Cfded",
"0xe631Ee3798F8b34dC90928e4e4025DcF209136f5",
"0x14b84f83eB139A0100952967A9B9549F955684F4",
"0x81fb105D07AEd8074314c8257234dc89b61D7ae2",
"0x5ebbe73b55e9346d17622bf1ca30d051c7642496",
"0xEE9d511ccA307164bbFF827CC1f925b945A11a21",
"0x48b5AAa3624894b944b2964F0d49bEfa23231b1F",
"0x591E80D5b01eE572c349D8CA09FAe7813E5eed13"];

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );

          if(whitelist.includes(accounts[0])) {

            dispatch(
              connectSuccess({
                account: accounts[0],
                smartContract: SmartContractObj,
                web3: web3,
              })
            );
            // Add listeners start
            ethereum.on("accountsChanged", (accounts) => {
              dispatch(updateAccount(accounts[0]));
            });
            ethereum.on("chainChanged", () => {
              window.location.reload();
            });

          } else {
            dispatch(connectFailed(`You are not on the whitelist`));
          }

          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
