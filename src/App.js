import React, { useState } from "react";
import "./index.scss";
import Collection from "./components/Collection";

const collection = [
	{
		id: 0,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=0824301499059b38d2190ed8366a061740b9fd83-10415038-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4f7e0c32ac57124dc2d73e4589310f5ba7d73c9c-9700546-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=38a2c4a593120f6f6b5facab238f52ca3d59fc88-10415036-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5GKl_u7rbxkQKGnlydHaOjOFu0aA-2Fi0kVAtXNEkl1ZJHAmKmt8300GTo5nZXRLtZLM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Горы",
		types: [0, 1],
		sizes: [26, 30, 40],
		price: 803,
		category: 0,
		rating: 4,
	},
	{
		id: 1,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=182d3ee8843b138740a1f00a2aec068ac01e310d-5232606-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4d013ff7f27d3334d69615084da81969a76d5b16-9856874-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh4mT2pLy9b0ITf2_kz9aFMDXY7RSK-DJj0xcV5HQTmQwHd3Mhemt82k0DRolgZHZOrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://avatars.mds.yandex.net/i?id=02760de4b02fec07cece603de1f868472cf9c474-10376972-images-thumbs&n=13",
		],
		title: "Море",
		types: [0],
		sizes: [26, 40],
		price: 245,
		category: 1,
		rating: 6,
	},
	{
		id: 2,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=a93d6924ffe4e56eb3b2e756ee19955db9fa0575-9214194-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=e7a5d840add645f243d6af4bbdec28060c507ec1-10467945-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5zPxqe_obElGJD-ynNbYOGXa5BCI-2JqgEAV5ScTlwFcdiYlfGt9iE0OTIRhYXZKrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIhtDPxq-K-P0tHLWmyxtbZOGfd7EmI8zdmgBJF5iZGxAFcdiVxfmIu1E0GToxjZn5As5LM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Архитектура",
		types: [0],
		sizes: [26, 40],
		price: 295,
		category: 1,
		rating: 4,
	},
	{
		id: 3,
		imageUrl: [
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIht2Sj--zra0tFLmq1zdeIPjDeuETd_2Mw0hQS5ScVxFoGICNzfjovjU0PR4pqYHFPrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://minsk.1prof.by/file/2022/04/photo_2022-04-22_15-44-04.jpg",
			"https://kartinkin.net/uploads/posts/2022-03/1647362329_33-kartinkin-net-p-gomel-kartinki-33.jpg",
			"https://traveltimes.ru/wp-content/uploads/2021/09/1432434.jpg",
		],
		title: "Города",
		types: [1],
		sizes: [26, 30, 40],
		price: 275,
		category: 2,
		rating: 2,
	},
	{
		id: 0,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=0824301499059b38d2190ed8366a061740b9fd83-10415038-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4f7e0c32ac57124dc2d73e4589310f5ba7d73c9c-9700546-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=38a2c4a593120f6f6b5facab238f52ca3d59fc88-10415036-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5GKl_u7rbxkQKGnlydHaOjOFu0aA-2Fi0kVAtXNEkl1ZJHAmKmt8300GTo5nZXRLtZLM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Горы",
		types: [0, 1],
		sizes: [26, 30, 40],
		price: 803,
		category: 0,
		rating: 4,
	},
	{
		id: 1,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=182d3ee8843b138740a1f00a2aec068ac01e310d-5232606-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4d013ff7f27d3334d69615084da81969a76d5b16-9856874-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh4mT2pLy9b0ITf2_kz9aFMDXY7RSK-DJj0xcV5HQTmQwHd3Mhemt82k0DRolgZHZOrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://avatars.mds.yandex.net/i?id=02760de4b02fec07cece603de1f868472cf9c474-10376972-images-thumbs&n=13",
		],
		title: "Море",
		types: [0],
		sizes: [26, 40],
		price: 245,
		category: 1,
		rating: 6,
	},
	{
		id: 2,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=a93d6924ffe4e56eb3b2e756ee19955db9fa0575-9214194-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=e7a5d840add645f243d6af4bbdec28060c507ec1-10467945-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5zPxqe_obElGJD-ynNbYOGXa5BCI-2JqgEAV5ScTlwFcdiYlfGt9iE0OTIRhYXZKrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIhtDPxq-K-P0tHLWmyxtbZOGfd7EmI8zdmgBJF5iZGxAFcdiVxfmIu1E0GToxjZn5As5LM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Архитектура",
		types: [0],
		sizes: [26, 40],
		price: 295,
		category: 1,
		rating: 4,
	},
	{
		id: 3,
		imageUrl: [
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIht2Sj--zra0tFLmq1zdeIPjDeuETd_2Mw0hQS5ScVxFoGICNzfjovjU0PR4pqYHFPrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://minsk.1prof.by/file/2022/04/photo_2022-04-22_15-44-04.jpg",
			"https://kartinkin.net/uploads/posts/2022-03/1647362329_33-kartinkin-net-p-gomel-kartinki-33.jpg",
			"https://traveltimes.ru/wp-content/uploads/2021/09/1432434.jpg",
		],
		title: "Города",
		types: [1],
		sizes: [26, 30, 40],
		price: 275,
		category: 2,
		rating: 2,
	},
	{
		id: 0,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=0824301499059b38d2190ed8366a061740b9fd83-10415038-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4f7e0c32ac57124dc2d73e4589310f5ba7d73c9c-9700546-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=38a2c4a593120f6f6b5facab238f52ca3d59fc88-10415036-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5GKl_u7rbxkQKGnlydHaOjOFu0aA-2Fi0kVAtXNEkl1ZJHAmKmt8300GTo5nZXRLtZLM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Горы",
		types: [0, 1],
		sizes: [26, 30, 40],
		price: 803,
		category: 0,
		rating: 4,
	},
	{
		id: 1,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=182d3ee8843b138740a1f00a2aec068ac01e310d-5232606-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4d013ff7f27d3334d69615084da81969a76d5b16-9856874-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh4mT2pLy9b0ITf2_kz9aFMDXY7RSK-DJj0xcV5HQTmQwHd3Mhemt82k0DRolgZHZOrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://avatars.mds.yandex.net/i?id=02760de4b02fec07cece603de1f868472cf9c474-10376972-images-thumbs&n=13",
		],
		title: "Море",
		types: [0],
		sizes: [26, 40],
		price: 245,
		category: 1,
		rating: 6,
	},
	{
		id: 2,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=a93d6924ffe4e56eb3b2e756ee19955db9fa0575-9214194-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=e7a5d840add645f243d6af4bbdec28060c507ec1-10467945-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5zPxqe_obElGJD-ynNbYOGXa5BCI-2JqgEAV5ScTlwFcdiYlfGt9iE0OTIRhYXZKrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIhtDPxq-K-P0tHLWmyxtbZOGfd7EmI8zdmgBJF5iZGxAFcdiVxfmIu1E0GToxjZn5As5LM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Архитектура",
		types: [0],
		sizes: [26, 40],
		price: 295,
		category: 1,
		rating: 4,
	},
	{
		id: 3,
		imageUrl: [
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIht2Sj--zra0tFLmq1zdeIPjDeuETd_2Mw0hQS5ScVxFoGICNzfjovjU0PR4pqYHFPrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://minsk.1prof.by/file/2022/04/photo_2022-04-22_15-44-04.jpg",
			"https://kartinkin.net/uploads/posts/2022-03/1647362329_33-kartinkin-net-p-gomel-kartinki-33.jpg",
			"https://traveltimes.ru/wp-content/uploads/2021/09/1432434.jpg",
		],
		title: "Города",
		types: [1],
		sizes: [26, 30, 40],
		price: 275,
		category: 2,
		rating: 2,
	},
	{
		id: 0,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=0824301499059b38d2190ed8366a061740b9fd83-10415038-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4f7e0c32ac57124dc2d73e4589310f5ba7d73c9c-9700546-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=38a2c4a593120f6f6b5facab238f52ca3d59fc88-10415036-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5GKl_u7rbxkQKGnlydHaOjOFu0aA-2Fi0kVAtXNEkl1ZJHAmKmt8300GTo5nZXRLtZLM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Горы",
		types: [0, 1],
		sizes: [26, 30, 40],
		price: 803,
		category: 0,
		rating: 4,
	},
	{
		id: 1,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=182d3ee8843b138740a1f00a2aec068ac01e310d-5232606-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=4d013ff7f27d3334d69615084da81969a76d5b16-9856874-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh4mT2pLy9b0ITf2_kz9aFMDXY7RSK-DJj0xcV5HQTmQwHd3Mhemt82k0DRolgZHZOrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://avatars.mds.yandex.net/i?id=02760de4b02fec07cece603de1f868472cf9c474-10376972-images-thumbs&n=13",
		],
		title: "Море",
		types: [0],
		sizes: [26, 40],
		price: 245,
		category: 1,
		rating: 6,
	},
	{
		id: 2,
		imageUrl: [
			"https://avatars.mds.yandex.net/i?id=a93d6924ffe4e56eb3b2e756ee19955db9fa0575-9214194-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=e7a5d840add645f243d6af4bbdec28060c507ec1-10467945-images-thumbs&n=13",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIh5zPxqe_obElGJD-ynNbYOGXa5BCI-2JqgEAV5ScTlwFcdiYlfGt9iE0OTIRhYXZKrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIhtDPxq-K-P0tHLWmyxtbZOGfd7EmI8zdmgBJF5iZGxAFcdiVxfmIu1E0GToxjZn5As5LM4RhMD9_5mHAIhpblOuA946a0sDtJLkNNkb2-81pK-5Q_wKo4NtNeCuU8f_4YSi5TFnIqQogBWTLWOgQEG9b5yMIsZRLgvL9-GJ-T5XbJG_r-tMBZLDJ7YqiXpdpwU_ulJ_eSHyv9TFTAMkfIX3wTSgVIDEmiN3sM1wM8EwHU7uT8ClM4w7m-Sy6ousBr4B3c5JHlWyAWfV28jbXqRnvwtBDyoQM18UVA4DBx1UtGAUAveilTjTV9EugAMBUywe7nwjFbLf-Gm088k5XDXfsl2PmZ4VkMMFFEuq2Eynxq5bgk9bgUPvB2TtAmZcdLVRJ_E08qUZgKUBbrIDAENvva19oITAX4kKZZNIeX2U31P9Taqf1pFwF4b4CuldVbe-mcOei8GxPzTkj1D2nHaWs_XxpZHEimFEEr-CU_Hjr1yOzPD3M53JKlcBONkdtV7xfr6I7fRS48c0Gkm4XtaWHUuRvbhTk69Vdw5hJI6VJmIWcpeTdZqwNRJuQVJBYh9N7pwghtL8GMvWwriI3me_Ya_Mid3mg4HFB8qaeu-WRE0boQ6bgHG_xkQ_A9c9JzZh9hCVUDVq4VZzH1JCUKD_vc7sAJRyLFn7VCEKCV7HPDAsTnj_hcDxRafYGKpvpMSdOqO8-AAiLRVFPKK2X5dGkHRwVMDVakMk0W6gY6AyHw_er9MUoF2bmkTxmptuVI4DjDy4zeRAgnUnaRt5H1SU_brzvNrh4C70Fy3T1i5F91C1kLTgp9qwdtGfQXIykO5evpyBpNKNSznVUpp5DlaPsx_OW3_Xw5PVZemK231G1S-Yk07KA-O910U-MweelWXD9HBWgwVYkseBXaECwrHPbz_PYhWzzPoIpVHJKh1G3FFMU",
		],
		title: "Архитектура",
		types: [0],
		sizes: [26, 40],
		price: 295,
		category: 1,
		rating: 4,
	},
	{
		id: 3,
		imageUrl: [
			"https://yandex-images.clstorage.net/k5UuA4167/72825fPW/x5LXmYAUUNkz8xNFb63svoHFNEwrGYNxTUnfIht2Sj--zra0tFLmq1zdeIPjDeuETd_2Mw0hQS5ScVxFoGICNzfjovjU0PR4pqYHFPrtbI7R5OGYGghG0QiYewfewgqPPnvDklLl1NkqCu7kFE9ZMI2KUyN84IRv4af4FNVARHKWkBfI0OexXVAxYkLcXS69k3UybEh4p9CYyH_FTKOfDzl95cORZydLi7h8RYRMSLP-CCLxncVmPwIknGe2kdVBNPCla7LEUU7DsBPi_S_tX_AXkFwYa_Sz6louF9zB_q1rLcUB0QTWCiq7fycE_VvDrTnjEV1UJD8hRU0kF7F34hahB5uSpbK-83Bw060v3rxAlsOf6ju1kFiqHXZvQb99623nw7PFRmgpqXyGFa2Yg9yok6FOZMc-QARtJSaChCFGkSbIYHXyjPNxYJAObN8_0eRD7onq1REYi7x2juF9Tuqu5nChV_XIGLiO9wVv2VIM6GFxfeSlbNDEbwbEUISwJfC1KYFmI7yjgMBQ709ub6IXga6p2EdhuOud9yxijmyYjCXjceUXi0m7DdamvYtxP3pD4Rx3JF0C1oy2FbMHgidBpfjwZvJ_ojBB4P4vPr_T9uB_SFmE4ekoTxa8s_xtqJ70gXPWx1iLCk0E9u27whypofGPRBU_8WU-phZTZYDkAVWpkweDbLIhgwAOD06fwVYwPnjbZ1NoqO-V7TB-nIr9t_HzdtXaW4p_hCbMuXB_KfJjXEUWnpAHjtbn0QVBdOFVC-Gl8p6T0RHgvB8NTEGEQfwZy7fD-ph8J96QDFy4nDeCw_Zk2Yj6j9RGTOlwXcgwYL0XB-_wdlxnJxDloVST5fizpQN_gkOzEe1_Ph7x9pEsuloUwxj4fiZuA_6_Cq-0k2O05EgqmJ2VlG6Jgk0qM_OeRRQPIcaM9bRRBUM3MWfaAvXBn_KzkjDc_m39QJfQnYsqF5BL6251jFBtY",
			"https://minsk.1prof.by/file/2022/04/photo_2022-04-22_15-44-04.jpg",
			"https://kartinkin.net/uploads/posts/2022-03/1647362329_33-kartinkin-net-p-gomel-kartinki-33.jpg",
			"https://traveltimes.ru/wp-content/uploads/2021/09/1432434.jpg",
		],
		title: "Города",
		types: [1],
		sizes: [26, 30, 40],
		price: 275,
		category: 2,
		rating: 2,
	},
];
console.log(Math.ceil(collection.length/3));
const cats = [
	{ name: "Все" },
	{ name: "Море" },
	{ name: "Горы" },
	{ name: "Архитектура" },
	{ name: "Города" },
];

function App() {
	const [searchValue, setSearchValue] = React.useState("");
	const [catValue, setCatValue] = React.useState("");
	const [catID, setCatID] = React.useState(0);
	const [page, setPage] = React.useState(0);
	// const [isPagination, setIsPagination] = React.useState(false)

	return (
		<div className="App">
			<h1>Моя коллекция фотографий</h1>
			<div className="top">
				<ul className="tags">
					{cats.map((cat, ind) => (
						<li
							onClick={(e) => {
								setCatID(ind);
								setPage(0)
								if (ind === 0) {
									setCatValue("");
								} else setCatValue(e.target.innerText);
							}}
							className={ind === catID ? "active" : ""}
							key={cat.name}
						>
							{cat.name}
						</li>
					))}
				</ul>
				<input
					value={searchValue}
					className="search-input"
					placeholder="Поиск по названию"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<div className="content">
				{collection
					.filter(
						(obj) =>
							obj.title.toLowerCase().includes(searchValue.toLowerCase()) &&
							obj.title.toLowerCase().includes(catValue.toLowerCase())
					)
					.map((obj, ind) => {
						if (ind + 1 >= page * 3 + 1 && ind + 1 < page * 3 + 4) {
							return (
								<Collection key={ind} name={obj.title} images={obj.imageUrl} />
							);
						}
					})}
			</div>
			<ul className="pagination">
				{[...Array(Math.ceil(collection.filter(
						(obj) =>
							obj.title.toLowerCase().includes(searchValue.toLowerCase()) &&
							obj.title.toLowerCase().includes(catValue.toLowerCase())
					).length/3))].map((_, i) => (
					<li
						onClick={() => {
							setPage(i);
						}}
						className={i === page ? "active" : ""}
						key={i}
					>
						{i + 1}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
