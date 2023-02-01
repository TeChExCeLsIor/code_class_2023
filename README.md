GIT Команди

Кога сакаме да клонираме некој гит репоситори(магацин во превод) ја користиме командата:
• git clone url_od_remote ime_folder
o Ако сакаме да клонираме специфична гранка од репоситорито пишуваме:
o git clone –b ime_od_branch url_od_remote ime_folder
За да фатиме некоја си гранка(branch анг.) пишуваме:
• git fetch ime_od_remote ime_od_branch
• Одкако ке ја фатиме од remote пишуваме: git checkout ime_od_branch
За да ставиме git во одреден фолдер пишуваме:
• git init
За да додадеме remote пишуваме:
• git remote add ime_za_remote url_od_remote
За да се навигираме во постоечка гранка пишуваме:
• git checkout ime_od_branch
За да креираме и да се навигираме во нова гранка пишуваме:
• git checkout -b ime_od_branch
За да провериме на која гранка се наоѓаме пишуваме:
• git branch
За да ја провериме состојбата во гит пишуваме:
• git status
За да ги додадеми моменталните промени пишуваме:
• git add ime_od_file
• или ако сакаме сите промени да ги додадеме git add .
За да се посветат пишуваме:
• git commit –m “poraka shto sakame da kazeme so nashata posveta”
За да ги ставиме промените на remote пишуваме:
• git push ime_od_remote ime_od_branch
• Ако имаме само 1 remote и сакаме да ги ставиме промените од моментална гранка која веќе постои на remote пишуваме само git push (Ако напишеме git push ime_od_remote ime_od_branch не би било грешно)
• Ако моменталната гранка не постои на ремоте пишуваме: git push --set-upstream ime_od_remote ime_od_branch
За да преземеме промени од remote пишуваме:
• git pull ime_od_remote ime_od_branch
• Ако имаме само 1 remote и сакаме да ги преземеме промените на гранката што се наоѓаме, доволно е да напишеме само: git pull (Ако напишеме git pull ime_od_remote ime_od_branch не би било грешно)
