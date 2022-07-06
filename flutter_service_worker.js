'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6f046bfd5a339ac2e071c0faeb7b07f3",
".git/config": "2fa2aeedf8d3c83eb795fd74316939a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a040f9b82dd4a701dc6b82395e0a9f1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3e9c34c853da1115c5d39d0fd1a4a6e",
".git/logs/refs/heads/main": "8274c71522dbc366afa0e58db5e095bd",
".git/logs/refs/remotes/origin/main": "81f7aa8732af729a91a9be5a41b1f394",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/cc8f66a53d8e9c2cfc4475b40b611528a0083a": "2aa4519bccf2b6bd880840f76dd83865",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/0e039d2ad1e6ad9cd200258c112dcab2d49f21": "81934ca0496f03eb386ccc90a4f74890",
".git/objects/08/af35c588ff2de87a5713a6ab09f78f69197d36": "cf50a65b55444ad9b279db4fd9abd603",
".git/objects/08/e84bde74ead479b079e6f8d0832a10e00840d3": "f37cfd6fb66b624d8b13ff6c9cb599e5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/e471cd1c65dd3ad21a18cd7d0a7bf89046752b": "b4cb435f109ed0edba3d0cfc6a56c9df",
".git/objects/0e/aeff3776fed2ae91c0120908fc78b737ef23c6": "08ad093378b4125aa6ad9e9585d67a68",
".git/objects/11/368ced89c60cedff371c294db217e81a6b99ec": "2b26c38527e2dbccd0e89cae6d83f4d7",
".git/objects/12/2c10458ac9682699ad1c9ae3b0f5a57e280af2": "949408eadb505a64036bc5022cb8363c",
".git/objects/14/4651a113abfb2d1efacb82c6f643e462a69d11": "57fe42e017c01c4518e32d11ca9fb201",
".git/objects/18/ba14621cd4c0c71a331d0ad3067388d406f5cc": "61c5f3ed3ecfe89f0c8daad8beed1498",
".git/objects/18/d0b38711589906dd6f6f6f8c1bc58a5af9d2f4": "70b292bb630dd286482baf400b8f3961",
".git/objects/1b/7f7b65aaf011cfd79c5b1e4957549a6109623d": "ad0559a1f97d22dd44c023b1101209a8",
".git/objects/1b/ff80c9c64676d4a7ee79196f7d83fcaa4063fa": "6c673a76e78824ac5fa6361a2b49e40c",
".git/objects/1f/5ce051e386a7f0713e734664281cb25dad2009": "93ad4e99bc3b305cf9bad032a84392be",
".git/objects/1f/8edfe130475fe80966ceaaf4aa041e2d8a50d9": "8265d4671e8ab057f417e0e55f377383",
".git/objects/20/944ffe8f2d17964bda9a0adbd0b6cf4cddf0a1": "b03174c4079b0fcf5889cf2b7899b7dc",
".git/objects/21/9cd144befd95f46b1be0d7e4f93b548796a152": "b284022f4a9c30a35fe731558a9b0582",
".git/objects/21/9ce353280b066d3bb56d85a3205dfa55a89ffd": "65628aa052c4f641412f0798da6b591e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/09eb63dbe3473dc6e20ec28b0424595d85860a": "363972365ce27c50c5850db0db4d6f2b",
".git/objects/2a/0aa22d9b78cb51cec3ab6df0b9080f619dc4f6": "70604e510b80b32f06efb8efc74cd211",
".git/objects/2c/4b103a7bc20213cb03582be77ba685114d5434": "f1faea51618cc8e7e9d487444a0b35e1",
".git/objects/2d/49635c89b1450e1be82b32fda4040642a79571": "58504139570e4f6f98a54b9b163ddc12",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/87765cfc23b833b24c5e8338536d030247b668": "df1e327fa6b9612e16b743e85ad09124",
".git/objects/31/4ef8305b831854c767acc4d705f95d34e89808": "78f39e627f2581e68be5bd873d131e56",
".git/objects/32/41df7ae9e2b1bf61f264769a21561b54015d01": "b7caa8cda0538f01e4681595dd252d27",
".git/objects/32/f8bccc99ef0b2a3fccae198c4ee0345dc8b5fc": "8635faad6c687a8ca9fd63cb599c787c",
".git/objects/34/146af73b856692d90a98356384b456f353b30d": "a0ca27dc9408ce6b14146c2fe1741166",
".git/objects/34/67bcd0f48a2f6b67ba0c3cf316f27731c64273": "55e9617cadf138f54f8466aa0c946ac4",
".git/objects/36/00d518e3ca4b7ab07facf5bdcbef20ab5db9e6": "fd06ee6becbd3596ee846d3ae4fab2dc",
".git/objects/37/69b646d521779d59ecafb27f5467e6d95c2fc8": "151e943403480be28bc9b8778e0c5f7f",
".git/objects/38/6cc6524f2bf2b63156adc0d2c9e7d524127de5": "b6640ed0bc108f4c58aee1cd45c5cbfc",
".git/objects/3a/3da0bb05b679f0a09dd3da375f54187191db76": "440f79087fb2f1828799d865a459dcc9",
".git/objects/3b/95c8514b4915bd391174b42ccf21f5894e240d": "8c3577864b94702da8e8238fbea210b9",
".git/objects/3e/e7d41a18a97f1a60e97035fdd59f005c4dfb55": "edfa62c1c36d83cb55466278eb4401f9",
".git/objects/41/4f55a3b92224c067204cda9c9015cb2e283875": "3abaaa5c80705c0a16ca0a670e401aae",
".git/objects/45/7d24c6cd1632c26294d66f2708e318ed9fcf13": "b9f6590d586d7c750d8f5cb64685490f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5476af901bc18d2d57bb423e6acea9965f083f": "40e422efdc932a84615f4859ebb26dc2",
".git/objects/47/9452e581547abf825e7826ab806a06a85cbb35": "a7a929957338f72944d7b30251cefd07",
".git/objects/4a/3954ab43b3a59e5037e4b27d34cfdf397725a7": "1daf1e6eecc458810bdcecc0ff4b0903",
".git/objects/4b/2410dd96bacebfb99aea45c023c78783cb7ffa": "57a15c711833b0664f3a0245998e1e52",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/80766e55ea40bd875b5fed21395de24c8d6919": "bd5716ff436b37bf6e343bd4ae05313a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/bd91aae188875e9eed1ed894d2e538567589b9": "bb3918c12b240652a586ff835a577603",
".git/objects/5e/52f1534dc8197a74bbe81a63d32a947985b573": "ed41f8009ae0a877d9b144ff176fbb38",
".git/objects/5f/de237f7b6c5058aa2a1ef12302756dfbac08fd": "3bde419d6246b2c373e43f6f97a6ee2c",
".git/objects/63/64ba7e0dcc03fa43682bf39e584d4d94460bfe": "2f5de77eabcc350782db01cdbed76cac",
".git/objects/63/82c12638e62b3b1a6cd5a4f16f54beccee61d2": "7e7dd26b94b36824752d276f340f3776",
".git/objects/63/970ce0f8e8085726a9645a848d8452a274dae0": "6f7fbbd7b499412e37d9b51fc72c1702",
".git/objects/63/bfdac45fed9c4a0bed0d1a403dfd43dd153682": "84da456017ffec88e82191dcf9595529",
".git/objects/63/c8b9686f33a1c3c6d40ab692048455fedd57ba": "262c4d80e653ed9c373d4777414c54e3",
".git/objects/64/4b56998c7062c1889500dd318067d3b252aca0": "5c5d92229699827d36d28c95e082616b",
".git/objects/68/eff582d4e21ac66ec20e8c147f1638803716b1": "0876c785c411242c80b91ccc239bea88",
".git/objects/6a/23d0a4c1c58afe29911566eb7772d5aab0f4ce": "643ec234006c138d519f0223eee3b782",
".git/objects/6a/9bb3efd27c58aff95990a583cd07fc7ee1da89": "ca87498cc82ab0a800a170865794eb20",
".git/objects/6b/3b40e7c2179894d41c6000f27c648ac00b9e33": "d743fb1368587b82b3a7acbeee3c2720",
".git/objects/6c/4d6b49334ce78343ee3b17d2632c9280a63b87": "fbf678d4c1fbe51c6bf44277cb80247d",
".git/objects/70/8b5f4e44bb8190ca8fee95209c92644555b996": "abee9afda0dd24c93c27c39f50fe80a4",
".git/objects/71/1a988d88e35bb3b0f1c66cb7f70cc0d1451001": "e2ddef0481a7be63cdbf1244309ff0cb",
".git/objects/71/a4cca194363ee4cc9a0d7689d3ab1402d9c6a2": "443f5d30b232f6127540a057170063e9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/cadd1506bb26b8e64f0fc5d647b2b025291600": "2fd5626f95a8e2ee842b05895168e3c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/a1b4e469281021a0ed14eb8196a2b4736c7ec4": "8f6d16f2a54811fd3b2f0326e0f94088",
".git/objects/81/00d1656b9a4c7184a2d1b58d0b4203c421a037": "2c0db69749ebc1ebf355615ce78d7b9d",
".git/objects/81/ac97a26bef8199407c02c0da81ad1093cc3059": "dafcc3b2a675fef62a76e44256645ba3",
".git/objects/82/fac902fd652fa1eec5dc8fa0380b8e686bdc7a": "df775c02ebd7c33e0d6f463d02bcbb25",
".git/objects/83/80d774b339e98ab566bd9bda3a5bdca9643a1c": "f317fe2b150d193b5b7765a678837a27",
".git/objects/83/de8efb71257f4be07dde5a134c0450e53bf73a": "bbb6b6f46505cbbffcd80d6b7e67ffe6",
".git/objects/83/dea2532094673b8e2a06157f78dc4d1e4c5a99": "79f7ebd78d817da1a18e709a3ceeb54c",
".git/objects/84/ce6d62bedad57ba1f1da5d0e517beba8623801": "15f9cce017a412ffc5272f166f4d08aa",
".git/objects/85/436fedde924900f851842d08eaf701cefb9acd": "c48dcf74a65ab33e9bd6b9c0c7073eba",
".git/objects/85/4ee6e81057be631beea01352bf071f770140ed": "0a370f373b57250a08ca1f5b2eafd37a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5f2ac6029bb787b0e37aa87410baca0306c88b": "26876ee52e56c4270a1aaf825d7e08cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ae4efd83dc62975a5b273a1601a2b9f4bd5596": "50c580f1c45f7daa56e4e004ab23a803",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/8d/78a64decabdcba35b94c5a94bc8c5d25f4f8d5": "9aa61ca31d7f97eaa41329f1d87d0990",
".git/objects/8f/3f5630909cc99b7b2c5614497e9aa83f73b1de": "2b85ea6ea89d2c4a32f1cd3765b313a8",
".git/objects/96/525eecde3c2a0607f36c79cf4cc91851d8ce3f": "8ad2f9fdb40c5b4f71fc40a991636e97",
".git/objects/99/dbbf9bfa73fc454e253dce94b14d3c78b7c025": "eebeb042ee3ecf22ace879b99774e8cd",
".git/objects/9a/cd9e622e504b6e72fa4749b96d430152677ed2": "86a8d9c060fb83ace86acdfa3120d4a8",
".git/objects/9b/1f0ddf7124a1f61d470740ab7a268bc1ec078a": "d71efe2d5f3bbc35059753f839b41212",
".git/objects/9e/05815aa7d4c33649e498930989e07271db992a": "006bbfd98e8a2f02f4c08cf71fc45bf9",
".git/objects/9e/7ade515f19b527ad64d8bd5682d654f3042197": "92f39e2f15d6e79719e2d0a1fecd9b65",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/eb43b957131a8315b6646fc9431cff6fa84617": "5a07ec4144d85b862ea3969aef8430a3",
".git/objects/b0/2ee646aa524a055b5f6e5abc84a316ad67ab59": "883649b37623cddc502e2d84be0be2e8",
".git/objects/b5/cf5979fa23c27339f8a0a2dc9cd703c7995f27": "19376e35cdfe2624abe6d734094767ae",
".git/objects/b5/e25e9f7aa4777bf0b3bf1fa54466971538a6fe": "80d8f3c8a29fe88e8b031dd889198159",
".git/objects/b6/07192c47dc52f4d50d28937790c14ae03cabdf": "46f27c31fe69ff23aa73699ee79f1b14",
".git/objects/b6/6c58bf4c399dfb96539f7c6ff10ecdefe2d962": "2a4bf3527506774467674a77b67f619b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e7356f7846c7e91aa005e9dd0d1c73e76c1ff": "eb602a255e58cb2321e3830e903e3354",
".git/objects/b7/694b570f316df0e8d94b5b7c2ff6273c1a2e12": "f3cf1cdaffebcf17f5786804d112f8ee",
".git/objects/b7/88a99d2847004dab6d9454653438350a7e69e0": "b601ded94df7529692e7a3b690e5b30c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/030d0ca6e50387c66fc4b71619af74e9b924e5": "067d5d13de7c02b1c5afcb94b69fb9dc",
".git/objects/bc/e71faeb36f3be70e74dd175c6e25d641ac65cd": "8ced16a5af973a93c133897e79ad1872",
".git/objects/be/e22609a41e38ef4620d0a45dc49e777ab27af8": "133f610ff10d4ef2a792e33e70aa0521",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/89f26eeb367f13f2edbbe9b4de7f5c4622f674": "719e86ac8caa50169b2af65518611d1a",
".git/objects/c8/d44fce8d47ab30db5a324f9428f38875ccdc9a": "b4f9f7e2255aecbb2641838094841b2f",
".git/objects/ca/024dd3689c7a560dfd99fcf3cab9a773c48493": "b242a1511e75749c3a8749aaff16043c",
".git/objects/cb/b14e4d1ffb7037afa73c5a3ab6d1f20043aa67": "f21c2ed0c6c86e9c94a4f147689aa62b",
".git/objects/cb/d8adc36938b52c8acb18928b5c6180b47789d6": "0cae62df632b8786a944e17fddeba460",
".git/objects/cb/f1c5478e4cebc0b264af66c9725aa070f8a8ee": "78d16e7ea6c65b229fa5c1dbf7358a75",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/6f921e6073b755602b0198cb8d9f990b8e84b1": "aeaf4779e0052d21c81631dd1f8a3101",
".git/objects/d5/32fb66d89bc527752288118a54d8ef7819ef6f": "ad06e1c7b957cc66a67c4807751df9f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a237cd7343774b11d01507a3ff247971b678db": "0ffdcd85f15e637e4580830981d184c8",
".git/objects/d6/dc251e98557cf5fee666236471083ae7c6674c": "ff1a7de50cde54a6377c0361085535ce",
".git/objects/d8/6da74aa9356e029d1530c53df5859303aac556": "bcafd20952cfc8d63a246a14c345046c",
".git/objects/db/70b30a0e552ee2bde5f40e2e02832e66884d4b": "6d893495d0884fdffe8dc50bfa125772",
".git/objects/db/ad31480408ca6981c2d0d3d7546cbd0140da9b": "d7cf4c25da02a0afd54f0eae8e95cdff",
".git/objects/dc/24d0b8f3c3dfa499af368dfafb4a165ad75f4f": "79c681ce02766207e3472fb44b824fdc",
".git/objects/dc/7de85e743fd8ff89ab6c199818094f233bbf63": "cf0aceb523b340894cb0ae17a6a60613",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/d8ad4eb6412dc4b05fe77704790b03da7e82f0": "f180442d8c76c1f9983975be2d2b2c65",
".git/objects/df/ab48768718efdf2a2b1c31312cab68fc858ece": "f91acb6132769e7277fc211017616ca4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bf2d468acfed468c8bf219cd97bb4d1c4872f6": "400dba669e38e430e044369d758f7e7a",
".git/objects/e6/1cbe8dd9e1ac894509d534b1f35eac37a909ca": "1784e0e34c3ac4f7e7ddceb91173bd9a",
".git/objects/e6/5f031f7ec156c480818c5385069c423a66fab1": "6242d7e328217fd18424afd60cf20cda",
".git/objects/e6/c420eecbc6707ce75bcd9789e346e582c3ba72": "e159d7c292aa88c5539b1292ca04b76a",
".git/objects/e9/a54047a0a118c0af6e5dc0ed983e850ae15385": "e86af9e102d720f4341ed765532ebd96",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/27e53442107ba3b8f5282577c74523fe349586": "41aea4ed753d91f6cf521bac1694218f",
".git/objects/ea/514b26409fdb56210f2ab0f36332870e6269fc": "042eac0cac72d6f4651a33cd4e28cb1c",
".git/objects/ea/5313e52a9020764a52dfe1af3c240603b9eac1": "febe0a4ec392527460acb1241b18a6dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/181873463436c6858f6075cd74560356b05c9e": "e454d9f66a620cde737128f986cb5802",
".git/objects/f0/fc1755220e8bb85ff163b685ded97e04b98f26": "acdf61df35240cd09cb39e55b3446ed6",
".git/objects/f1/dd8327272262cc080028183c300c088f52b424": "ba42ac3ba949818d45daa1806b251f5a",
".git/objects/f4/bdb4c737e6c0f07c98a8fb8dfb7eebfeee1bb9": "02310bbcd4776d45108fd30573fca53e",
".git/objects/f5/dbc9908d0d8715113db0a50e51f2da5476d8d1": "860013a5069b61fc6463c01f6c27fe0b",
".git/objects/f6/0985abf30efcb4cd5bb260944a329547c9548d": "4a7ef1ba31657398a76b8d9dedca26e8",
".git/objects/f9/0f9b8cdc6b908ba74a691554cc194e67c03d90": "ee00e550d57dcecd017cddc0cd5a2361",
".git/objects/fd/5af047aab2c23360ea33c9359f7c6ab30fc703": "7ccacc2653d4fcd860fd1d0f766347a4",
".git/objects/ff/c494fd797524e22043676fabc987df749ca4a4": "f0cec6ced1af817f90d3c7082a768069",
".git/refs/heads/main": "d26fa80847be3dbcdcc409ed10cd87b9",
".git/refs/remotes/origin/main": "d26fa80847be3dbcdcc409ed10cd87b9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7abf89b1b9fb7206c05eb27a264dc3d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8d7efd990fae03d7da8017b5b81f9766",
"/": "8d7efd990fae03d7da8017b5b81f9766",
"main.dart.js": "7a8ba901cd2d4f35aea8dabc387b99e9",
"manifest.json": "e9daccaee1b5a793ecc2da455edcbeb4",
"version.json": "0a9d3d3db51d46bb10b6be7ca38635c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
