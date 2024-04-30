window.onload = function(event){
    let skills = [];
    Array.from(document.getElementById("skills_list").children).forEach(function(li){
        skills.push(li.querySelector("input").getAttribute("id"));
    });



    skills.forEach(function(skill_name){
        Array.from(document.getElementsByClassName(skill_name + "_expert")).forEach(function(element){
            element.disabled = true;
        });

        let skill = document.getElementById(skill_name);
        skill.addEventListener('change', function(){
            Array.from(document.getElementsByClassName(skill_name + "_expert")).forEach(function(element){
                element.disabled = !skill.checked;
            });
        });
    });
    
    document.getElementById("species").addEventListener("change", function(event){
        const rare_species = document.querySelector("#character_names > div:nth-child(4)");
        rare_species.style.visibility =  event.target.value == "other" ? "visible" : "hidden";
    });

    Array.from(document.getElementById("skills_list").children).forEach(function(li){
        if(!li.querySelector(".expert_list_item_add")) return;
        
        let expert_list = li.querySelector(".expert_list");
        const skill_name = li.querySelector("input").getAttribute("id");

        li.addEventListener("click", function(event){
            if(event.target.classList.contains("expert_list_item_add")){
                let len = Array.from(expert_list.children).length;
                let new_item = document.createElement('li');
                let isDisabled = li.querySelector("input").checked ? "" : "disabled";
                
                if (len == 1) {
                    event.target.parentElement.querySelector(".expert_list_item_delete").style.cssText = "";
                }

                new_item.className = "expert_list_item";
                new_item.innerHTML = `
                    <input type="text" class="${skill_name}_expert" name="${skill_name}_expert_${len + 1}" placeholder="専門技能" ${isDisabled}/>
                    <div class="expert_list_item_add">＋</div>
                    <div class="expert_list_item_delete">－</div>
                `
                event.target.parentElement.after(new_item);
                
                Array.from(li.querySelectorAll(".expert_list_item")).forEach(function(item, i){
                    item.querySelector("input").name = skill_name + "_expert" + (i + 1);
                });
            }
            if(event.target.classList.contains("expert_list_item_delete")){
                event.target.parentElement.remove();
                let len = Array.from(li.querySelector(".expert_list").children).length;
                if (len == 1) {
                    expert_list.querySelector(".expert_list_item_delete").style.display = "none";
                }
            }
        });
    });

    Array.from(document.getElementById("special_skills_list").children).forEach(function(li, i){
        li.addEventListener("change", function(event){
            if(event.target.classList.contains("special_skill_group")){
                var select = event.target.parentElement.querySelector(".special_skill");
                switch(event.target.value){
                    case "tactics":
                        select.innerHTML = `
                        <option value="concealed_weapon">暗器</option>
                        <option value="fence_off">受け流し</option>
                        <option value="covering_fire">援護射撃</option>
                        <option value="stance">構え</option>
                        <option value="riding_combat">騎乗戦闘</option>
                        <option value="fatal_spot_attack">急所の一撃</option>
                        <option value="high_angle_fire">曲射</option>
                        <option value="ready_to_die">決死の覚悟</option>
                        <option value="martial_arts">拳闘術</option>
                        <option value="escort">護衛</option>
                        <option value="heavy_attack">重撃</option>
                        <option value="risk_attack">捨て身の一撃</option>
                        <option value="machine_gunning">掃射</option>
                        <option value="snipe">狙撃</option>
                        <option value="provoke">挑発</option>
                        <option value="lightning_speed">電光石火</option>
                        <option value="rush">突撃</option>
                        <option value="cleave">凪払い</option>
                        <option value="knock_shooting">弾き落とし</option>
                        <option value="parry">パリィ</option>
                        <option value="feint">フェイント</option>
                        <option value="throw_weapon">武器投げの習熟</option>
                        <option value="break_weapon">武器破壊</option>
                        <option value="fortitude">不屈</option>
                        <option value="gait">歩法</option>
                        <option value="anticipate">見切り</option>
                        <option value="pierce_armor">鎧通し</option>
                        `;
                        break;
                    case "magic":
                        select.innerHTML = `
                        <option value="light">灯り</option>
                        <option value="dozing">居眠り</option>
                        <option value="enchant">エンチャント</option> <!--add input-->
                        <option value="send_sound">音送り</option>
                        <option value="silence">尾渡慶次</option>
                        <option value="recovery">回復</option>
                        <option value="read_wind">風読み</option>
                        <option value="activate">活性</option>
                        <option value="fear">恐怖</option>
                        <option value="warning">警報</option>
                        <option value="barrier">結界</option>
                        <option value="illusion">幻影</option>
                        <option value="telecommunication">交信</option>
                        <option value="power_of_word">言霊</option>
                        <option value="ritual_of_spirit">死儀</option> <!--add input-->
                        <option value="heal">治癒</option>
                        <option value="calling">通話</option>
                        <option value="familiar">使い魔</option> <!--add input-->
                        <option value="ignite">点火</option>
                        <option value="extend_magic">範囲魔術</option>
                        <option value="light_brush">光の筆</option>
                        <option value="cover">被覆</option>
                        <option value="float">富裕</option>
                        <option value="magic_weapon">魔術の得物</option> <!--add input-->
                        `;
                        break;
                    case "features":
                        select.innerHTML = `
                        <option value="wisdom">叡智</option> <!--add input-->
                        <option value="concentrate">過集中</option>
                        <option value="acrobatics">軽業</option>
                        <option value="connivance">看破</option>
                        <option value="thin">希薄</option>
                        <option value="cajolery">口車</option>
                        <option value="connection">コネクション</option> <!--add input-->
                        <option value="change_clothes">様変わりの衣</option>
                        <option value="hide_object">仕込み</option> <!--add input-->
                        <option value="auto_writing">自動筆記具</option>
                        <option value="pickpocket">スリの極意</option>
                        <option value="instant">即席</option> <!--add input-->
                        <option value="infinite_bagpack">底なしの鞄</option>
                        <option value="training">調教</option> <!--add input-->
                        <option value="instruction">伝授</option>
                        <option value="cleverness">天性の小手先</option>
                        <option value="adaptability">踏破</option>
                        <option value="cipher">独自暗号</option>
                        <option value="spoofing">なりすまし</option> <!--add input-->
                        <option value="beauty">美貌</option>
                        <option value="other_name">二つ名</option> <!--add input-->
                        <option value="decompose">分解</option>
                        <option value="honor">誉れ</option> <!--add input-->
                        <option value="night_vision">夜目</option>
                        `;
                        break;
                    default:
                        select.innerHTML = `
                        <option value="">---</option>
                        `;
                        break;
                }
            }
            if(event.target.classList.contains("special_skill_group") || event.target.classList.contains("special_skill")){
                var select = event.target.parentElement.querySelector(".special_skill");
                var input = event.target.parentElement.parentElement.querySelector("input");
                const add_input_list = ["enchant", "ritual_of_spirit", "familiar", "magic_weapon", "wisdom", "connection", "hide_object", "instant", "training", "spoofing", "other_name", "honor"];
                input.style.display = add_input_list.includes(select.value) ? "block" : "none";
            }
        });
    });

    document.getElementById("init_experiments").addEventListener("change", function(event){
        var scar = Number(document.querySelector("#init_scar").value);
        var weakness1 = document.querySelector("#init_weakness_1").value != "" ? 1 : 0;
        var weakness2 = document.querySelector("#init_weakness_2").value != "" ? 1 : 0;
        const max_exp = scar + (weakness1 + weakness2) * 10 + 100;
        
        document.querySelector("#init_experiment_points > div:nth-child(2)").innerHTML = max_exp;
        document.querySelector("#max_experiment_points").innerHTML = max_exp;
    });

    document.getElementById("equipments").addEventListener("change", function(event){
        var weapon1 = document.querySelector("#weapon1").value;
        var weapon2 = document.querySelector("#weapon2").value;
        var armor = document.querySelector("#armor").value;
        const weapon_list = {"": 0, "combat_small": 1, "combat_medium": 3, "combat_large": 5, "shooting": 2, "catalyst": 1};
        const armor_list = {"": 0, "light_armor": 2, "heavy_armor": 5};
        
        document.querySelector("#weight > div:nth-child(2)").innerHTML = weapon_list[weapon1] + weapon_list[weapon2] + armor_list[armor];
    });

    document.getElementById("status").addEventListener("change", function(event) {
        const status_element = document.getElementById("status");
        var skill = 0;
        var expert_skill = 0;
        var special_skill = 0;
        Array.from(status_element.querySelector("#skills_list").children).forEach(function(li){
            if(li.querySelector("input").checked)
                skill++;
        });
        Array.from(status_element.querySelectorAll(".expert_list_item")).forEach(function(li){
            if(li.querySelector("input").value != "")
                expert_skill++;
        });
        Array.from(status_element.querySelectorAll(".special_skill")).forEach(function(li){
            if(li.value != "")
                special_skill++;
        });
        const now_exp = skill * 10 + expert_skill * 5 + special_skill * 5;
        document.querySelector("#now_experiment_points").innerHTML = now_exp;
        const max_exp = Number(document.querySelector("#max_experiment_points").textContent);

        const div = document.querySelector("#experiment_points > div");
        div.style.border = now_exp > max_exp ? "2px solid #d06060" : "2px solid #00d0d0";
        div.style.color = now_exp > max_exp ?  "#d06060" : "#00d0d0";
    });

    document.getElementById("output_button").addEventListener("click", function(event){
        // キャラ名など
        const character_names = document.getElementById("character_names");
        const character_name = character_names.children[0].querySelector("input").value;
        const player_name = character_names.children[1].querySelector("input").value;
        const select_species = character_names.children[2].querySelector("select");
        const species = select_species.options[select_species.selectedIndex].textContent;
        const rare_species = character_names.children[3].querySelector("input").value;
        var memo = "";

        
        memo += `名前：${character_name}（${player_name}）\n`;
        memo += `種族：${select_species.value == "other" ? `${species}（${rare_species}）` : species}\n`;
        memo += "\n";

        // 初期傷痕
        const init_scar = Number(document.querySelector("#init_scar").value);

        // 技能
        var commands = "1d100>={ダメージ}+{傷痕} 〈ダメージチェック〉\n1d100>={ストレス} 〈ストレスチェック〉\n:傷痕+{ダメージ}/2\n:ダメージ=0\n";
        Array.from(document.getElementById("skills_list").children).forEach(function(li){
            const dice = li.querySelector("input").checked ? "2d6" : "1d6";
            const skill_name = li.querySelector(".skill_name").textContent;
            commands += `${dice} 〈${skill_name}〉\n`;

            if(li.querySelector(".expert_list") == null) return;

            Array.from(li.querySelector(".expert_list").children).forEach(function(l){
                const special_skill_name = l.querySelector("input").value;
                if(special_skill_name != ""){
                    commands += `3d6 〈${skill_name}：${special_skill_name}〉\n`;
                }
            });
        });
        
        // 特技
        memo += "【特技】\n";
        Array.from(document.getElementById("special_skills_list").children).forEach(function(li){
            const special_skill_group = li.querySelector(".special_skill_group");
            const special_skill = li.querySelector(".special_skill");
            const special_skill_name = special_skill.options[special_skill.selectedIndex].textContent;
            const special_skill_note = li.querySelector(".special_skill_note").value;
            const add_input_list = ["enchant", "ritual_of_spirit", "familiar", "magic_weapon", "wisdom", "connection", "hide_object", "instant", "training", "spoofing", "other_name", "honor"];
            
            if(special_skill_group.value != ""){
                memo += add_input_list.includes(special_skill.value) ? `《${special_skill_name}：${special_skill_note}》` : `《${special_skill_name}》`;
            }
        });
        memo += "\n\n";


        // 装備
        memo += "【装備】\n";
        const weapon1 = document.querySelector("#weapon1");
        const weapon1_group = weapon1.options[weapon1.selectedIndex].textContent;
        const weapon1_name = document.querySelector("#weapon1_name").value;
        const weapon2 = document.querySelector("#weapon2");
        const weapon2_group = weapon2.options[weapon2.selectedIndex].textContent;
        const weapon2_name = document.querySelector("#weapon2_name").value;
        const armor = document.querySelector("#armor");
        const armor_group = armor.options[armor.selectedIndex].textContent;
        const armor_name = document.querySelector("#armor_name").value;
        const weight = Number(document.querySelector("#weight > div:nth-child(2)").textContent);
        const weapon_list = {"": "", "combat_small": "1d4+1", "combat_medium": "1d6+1", "combat_large": "1d10", "shooting": "1d8", "catalyst": ""};
        //const armor_list = {"": 0, "light_armor": 2, "heavy_armor": 5};
        if (weapon_list[weapon1.value] != ""){
            commands += `${weapon_list[weapon1.value]} 〈ダメージ判定（${weapon1_name}）〉`;
        }
        if (weapon_list[weapon2.value] != ""){
            commands += `${weapon_list[weapon2.value]} 〈ダメージ判定（${weapon2_name}）〉`;
        }
        if (weapon1.value != "") memo += `${weapon1_name}（${weapon1_group}）\n`;
        if (weapon2.value != "") memo += `${weapon2_name}（${weapon2_group}）\n`;
        if (armor.value != "") memo += `${armor_name}（${armor_group}）\n`;

        var ccfolia_character = {
            "kind": "character",
            "data": {
                "params": [],
                "status": [
                    {
                        "label": "ダメージ",
                        "value": 0
                    },
                    {
                        "label": "傷痕",
                        "value": init_scar
                    },
                    {
                        "label": "ストレス",
                        "value": 0
                    }
                ],
                "name": character_name,
                "initiative": weight * -1,
                "memo": memo,
                "externalUrl": "",
                "commands": commands
            }
        };

        try {
            navigator.clipboard.writeText(JSON.stringify(ccfolia_character));
            document.querySelector("#output_button > div").innerHTML = "　　コピー完了　　";
            window.setTimeout(function(){
                document.querySelector("#output_button > div").innerHTML = "ココフォリア駒出力";
            }, 3000);
        } catch (error) {
            console.error(error.message);
        }
    })
};
