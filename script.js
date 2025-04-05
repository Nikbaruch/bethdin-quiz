let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Qu’est-ce que Rosh Rodesh ?",
        answer: "La tête du mois du calendrier hébraïque, « néoménie »"
    },
    {
        question: "Qu’ajoute-t-on dans la prière du matin le jour de rosh rodesh ?",
        answer: "Yallé ve yavo (dans la Amidah)"
    },
    {
        question: "Combien de personnes montent à la Torah le jour de Rosh Rodesh ?",
        answer: "4"
    },
    {
        question: "Qu’est-ce que Moussaf ?",
        answer: "Prière supplémentaire qui correspond au sacrifice supplémentaire qui avait lieu au Temple les jours de fête. Cette prière a pour base le Chémoné-essré. On lit moussaf : chabbat, Roch Hodèche, Fêtes de Pèlerinage, Kippour, Roch Hachana"
    },
    {
        question: "Que rajoute-t-on dans le Birkat Hamazone le jour de Rosh Rodesh ?",
        answer: "Yallé ve yavo"
    },
    {
        question: "Quand récite-t-on le birkat Hamazone ?",
        answer: "Les juifs récitent le birkat ha-mazon, selon les prescriptions de la Halakha, après un repas qui comprend du pain (levé ou non levé) (un kasaï) fait d'une ou plusieurs céréales parmi le blé, l'orge, le seigle, l'avoine ou l'épeautre."
    },
    {
        question: "Comment cashérise-t-on la viande ?",
        answer: "Technique du SALAGE : Lavage, Trempage, Salage, Egouttage, Rinçage"
    },
    {
        question: "Comment cashérise-t-on le poulet ?",
        answer: "On la passe sur une flamme pour ôter les poils – on retire la tête, les veines, les pâtes inférieures, le bout des ailes et les ongles, les organes. Après avoir fini la bedika, on procède à la même méthode qu’avec la viande, intérieur vers le bas pour favoriser l’écoulement."
    },
    {
        question: "Comment cashérise-t-on le cœur ?",
        answer: "Le cœur est très irrigué on procède donc à un quadrillage au couteau avant de commencer le processus de cachérisation. On rince, on le coupe en 2 endroits avant de le saler."
    },
    {
        question: "Comment cashérise-t-on le foie ?",
        answer: "Le foie ne peut se cachéchirise que par grillage. On embroche le foie et on le fait tourner jusqu’à ce que le sang arrête de couler et que l’extérieur du foie soit durci par la cuisson. On le coupe dans la longueur et la largeur – on le rince – on le sale et on le grille immédiatement, la face coupée en bas pour favoriser l’écoulement."
    },
    {
        question: "Doit-on tremper de la vaisselle en plastique au mikvé ?",
        answer: "Non. Matières qui nécessitent l’immersion avec bénédiction : métal = aluminium, inox, étain, argent, bronze, cuivre, acier, or, nérosta. Verre = duralex, pyrex, cristal, arcopal. Matières qui nécessitent l’immersion sans bénédiction : faïence vernissée ou vitrifiée, porcelaine. Matières ne nécessitant pas d’immersion dans un mikvé : pierre, argile, terre, bakélite, grès, bois, caoutchouc, marbre, plastique."
    },
    {
        question: "Quelle bénédiction dit on en trempant de la vaisselle au mikvé ?",
        answer: "Tevilat Kélim. Barou’h Ata Ado-naï Elo-hénou Mélèkh Haolam Achère Kidechanou Bémitsvotav Vetsivanou Al Tevilat Kéli (ou Kélim s’il y en a plusieurs)"
    },
    {
        question: "Citez trois livres prophétiques.",
        answer: "Neviim Richonim (premiers prophètes) : Josué, Shoftim / les juges, Samuel (I et II), Rois (I et II) mélachim. Neviim A’haronim (derniers prophètes) : Isaie, Jeremy, Ezechiel, Trei Assar (12 prophètes)"
    },
    {
        question: "Citez les 5 livres de la Torah.",
        answer: "Berechit (génèse), Chemot (exode), Vayiqra (lévitique), Bamidbar (nombres), Devarim (deutéronome)"
    },
    {
        question: "Citez trois livres Hagiographes.",
        answer: "KETOUVIM 11 livres (=Hagiographes) : Téhilims (psaumes : 150), Mishlei (proverbes), Job, Méguila Esther = Pourim, Méguila Ruth = Chavouot, Méguila Eikha (lamentations) = Tisha Beav - 9 av, Méguila Qohélet (écclésiaste) = Soukkot, Méguila Shir Ashirim (Cantiques des cantiques) = Shabbat, Daniel, Ezra/Néhémie, Divrei Hayamim (chroniques I et II)"
    },
    {
        question: "Récitez la bénédiction pour un fruit de l’arbre.",
        answer: "Baroukh ata Achem Elohénou melekh haolam bori peri ha-èts."
    },
    {
        question: "Récitez la bénédiction pour les bananes.",
        answer: "Baroukh ata Achem Elohénou melekh haolam bori peri haadama"
    },
    {
        question: "De qui Abraham est-il le père ?",
        answer: "Isaac et Ismaël"
    },
    {
        question: "Qui sont les frères de Myriam ?",
        answer: "Sœur ainée de Moise et Aaron"
    },
    {
        question: "Combien y a-t-il de tribus d’Israël ?",
        answer: "12. Levy, Benjamin, Juda, Asher, Naphtali, Gad, Simeone, Zebulon, Reouven, Dan, Joseph, Issaac"
    },
    {
        question: "Quelle est la dernière fête que nous avons célébrée ?",
        answer: "Pessa’h"
    },
    {
        question: "Quelle sera la prochaine fête chômée que nous allons célébrer ?",
        answer: "Chavouot"
    },
    {
        question: "Quel événement allons-nous célébrer par un jeûne ces prochaines semaines ?",
        answer: "Jeûne du 17 Tamouz"
    },
    {
        question: "Quelle paracha lirons-nous cette semaine ?",
        answer: "Parachat Kedochim"
    },
    {
        question: "Dans quel livre de Torah se trouve-t-elle ?",
        answer: "Vayikhra"
    },
    {
        question: "Combien de temps dure Pessah en Israël ? En diaspora ?",
        answer: "7 jours / 8 jours. La fête de Pessa’h se caractérise par une triple interdiction concernant le ’hamets : de le consommer, d’en profiter et d’en posséder. Le ’hamets est un terme désignant tout aliment ou boisson ou tout autre produit fait à partir du blé, de l’orge, du seigle, de l’avoine, de l’épeautre ou de leurs dérivés, ayant fermenté, même si le produit n’en contient qu’une toute petite partie."
    },
    {
        question: "Combien de temps dure Soukkot en Israël ? En diaspora ?",
        answer: "7 jours / 8 jours"
    },
    {
        question: "Qu’est-ce que la diaspora ?",
        answer: "La diaspora juive (« dispersé » ou Galout, « exil ») désigne la dispersion du peuple juif à travers le monde et donc tous les juifs qui ne vivent pas en Israël."
    },
    {
        question: "Quand ne portons nous pas de kippa ?",
        answer: "Quand on se lave les cheveux ou quand on se les fait couper. « Kippa » signifie « ce qui recouvre ». Ce terme désigne le fait de se couvrir la tête dans le cadre religieux. « En langue araméenne, proche de l’hébreu, couvre-chef se disait “yira malka”, ce qui signifie “crainte du royaume céleste”, rappelle Jonas Jacquelin. La kippa rappelle la modestie inhérente à chaque être humain. » Pour le grand rabbin de France, Haïm Korsia, c’est bien un signe « de soumission à Dieu », et non « de reconnaissance »."
    },
    {
        question: "Est-il obligatoire d’aller au mikvé pour un homme ?",
        answer: "Non"
    },
    {
        question: "Récitez la bénédiction pour des fraises.",
        answer: "Haadama. Les fraises et les bananes sont les exceptions de la bénédiction de Ha’ets car leurs arbres ne se régénèrent pas seuls et donc sont considérés comme étant terre."
    },
    {
        question: "Récitez la bénédiction pour du café sans sucre.",
        answer: "Chéhakol"
    },
    {
        question: "Donnez la date de Pessah.",
        answer: "14 Nissan au soir au 22 Nissan"
    },
    {
        question: "Citez une mitzvah propre à chaque fête.",
        answer: "Roch Hachana = Sonnerie du chofar, Kippour = Jeûne, Hanoukka = Bougies, Pourim = Meguila d’Esther, Pessah = Commandements du Hamets, Chavouot = meguila de Ruth"
    },
    {
        question: "Quel jour est-il obligatoire de sonner le chofar ?",
        answer: "C'est un commandement positif de la Torah d'écouter le chofar à Roch Hachana"
    },
    {
        question: "Peut-on déchirer un papier cadeau à Shabbat ?",
        answer: "Non"
    },
    {
        question: "Une femme peut-elle aller au mikvé le jour ?",
        answer: "Oui, pour son mariage. Sinon la nuit."
    },
    {
        question: "Comment compte-t-on les jours de Niddah ?",
        answer: "12 jours au minimum. 5 jours : le début du compte des 5 jours dépend du moment ou l ‘on constate l’arrivée des menstrues. Si arrivées le jour, c’est le 1er jour du décompte. Si arrivées après la tombée de la nuit, c’est le lendemain qui sera le premier jour du décompte. Le 5ème jour = Hefsek Tahara. 1/ Bedika : 1/2h avant le coucher du soleil quand il fait grand jour. Si ok : 2/ Mo’h do’houk (=tissu que l’on place dans le vagin pendant 20 minutes : du coucher du soleil à la tombée de la nuit) à faire au moins une heure après Bedika. Si ok. 3/ Début des chiva nehiyim (7 jours de netteté-vérification). Voir détails ci –dessus (Qu’est-ce que le chiva nékiim ?). NB : après un accouchement : si fille 14 jours de niddah / si garçon 7 jours de niddah"
    },
    {
        question: "Qu’est-ce que le chiva nékiim ?",
        answer: "Cette période de sept jours permet de vérifier que les écoulements sanguins ont bien cessés. La période d’abstinence et de séparation du couple se poursuit. Pendant toute la durée des sept jours : la femme portera du linge blanc, qu’elle examinera le soir pour s’assurer de l’absence de trace de sang. On fait un examen (bedika) le 1er et le 7ème jour au minimum, on peut aussi fait faire au maximum un examen matin et soir. A la fin du 7ème jour, après la tombée de la nuit, on doit aller au Mikvé (al atévila)."
    },
    {
        question: "Pour quelles raisons peut-on prolonger la période de Niddah ?",
        answer: "Lorsque les 5 jours se sont écoulés, la femme procède à « l’examen d’interruption » (= hefsek taharat) : Bédika (examen interne) si pas concluant = des saignements persistent, la niddah se prolonge encore pendant un jour. Il faudra alors refaire un examen le soir et ainsi de suite. Et après Mo’h do’houk (=tissu que l’on place dans le vagin pendant 20 minutes : du coucher du soleil à la tombée de la nuit) à faire au moins une heure après Bedika. Si cet examen échoue on prolonge."
    },
    {
        question: "Quelle bénédiction fais-t-on lors de l’allumage des bougies de Chabbath ?",
        answer: "Baroukh ata Adonaï, élohénou mélekh ha’olam, acher kidéchanou bémitsvotav, vétsivanou léhadlik ner chèl Chabbat. (Béni sois-Tu, Hachem, notre Dieu, Roi de l’univers, qui nous as sanctifié par Tes commandements et nous a ordonné d’allumer la lumière du Chabbat.)"
    },
    {
        question: "Peut-on faire le kiddouche VENDREDI SOIR sur autre chose que du vin ?",
        answer: "Le vendredi soir, en l’absence de vin, il est stipulé dans le Choul’hane ‘Aroukh au nom du Roch, que l’on récitera le Kiddouch sur le pain qui est l’aliment le plus important du repas. Le cas où l’on n’aurait pas de vin à sa disposition, ou qu’on n’ait pas pu l’acquérir du fait de son prix exorbitant. Quand on n'a pas de pain, on pourra faire aussi le kidouch sur des gâteaux, à condition d'en manger une quantité de 235 ml, soit proche d'un volume d'un quart de litre, car des gâteaux mangés dans cette quantité nécessitent la berakha hamotsi avant leur consommation et birkat hamazone après leur consommation."
    },
    {
        question: "Peut-on faire le kiddouche de SAMEDI MATIN sur autre chose que du vin ?",
        answer: "Par contre, on ne pourra pas faire le kidouch du Shabbath matin sur du pain car on ne verra pas de différence entre un jour de la semaine et le jour de Shabbath, on fera donc le kidouch sur une boisson répondant aux critères suivants : 1) Alcoolisée ou 2) qu'on ait l'habitude de boire dans le pays dans lequel nous nous trouvons. Attention, il ne faudra pas que ce soit une boisson trop piquante car il faut en boire au moins 44ml pour que le kidouch soit valable."
    },
    {
        question: "Qu’est-ce que la Méguillah ?",
        answer: "Rouleau, livre, un écrit"
    },
    {
        question: "Qu’est-ce que la Havdala ?",
        answer: "La havdala (qui signifie « distinguer, séparer ») est la cérémonie rituelle qui clôt un shabbath ou un yom tov."
    },
    {
        question: "Quelle différence entre la Havdalah du shabbat et celle des fêtes ?",
        answer: "Yom Tov qui se termine en semaine : On n’utilisera ni épices, ni feu, on ne récitera que la première bénédiction sur le vin, et la quatrième bénédiction. Pourquoi ? Car on a le droit d’utiliser le feu pendant Yom Tov (donc pas de raison de faire la bénédiction relative au feu) et la tristesse de se séparer d’un Yom Tov tombant en semaine n’égale pas celle de se séparer du shabbath (donc pas d’épices). Exception : à l’issue de Kippour, on fera le vin et le feu, mais pas les épices, de préférence sur une flamme allumée avant le début de Kippour (par exemple la ner zikkaron). La Havdala à l’issue d’un Yom Tov coïncidant avec Shabbath : elle est identique à une Havdala de shabbath « normal ». La havdala « complète » à la fin de Shabbath commence par la formule « kos yechouot essa ouvchem Hachem ekra » (je lèverai la coupe du salut et invoquerai le nom de l’Eternel) et comprend quatre bénédictions : La bénédiction sur le vin : la coupe dans la main droite, on dit « Baroukh atta Hachem, elokénou mélèkh haolam, boré péri hagéfèn ». On ne boit pas après cette bénédiction et on a coutume de rire franchement, pour tromper le Satan : celui-ci en effet, voyant que les Juifs quittent le temps du shabbath, temps protégé, vers un temps profane où les péchés et l’éloignement de la Torah sont plus susceptibles de se produire, constate qu’ils ne boivent pas le vin après la bénédiction (contrairement à ce qui est normalement requis par la loi juive) et rient comme des idolâtres : il se détourne d’eux, persuadé que son travail de tentation et de sape est accompli… On se saisit ensuite des parfums, on prononce la bénédiction sur les arbres odorants « Baroukh atta Hachem, élokénou mélèkh haolam, boré atsé bésamim » et on respire les épices. Certains ont coutume d’en mettre une poignée dans leur poche de leur pantalon, pour garder la joie du shabbath. On dit ensuite la bénédiction sur le feu : « Baroukh atta Hachem, élokénou mélèkh haolam, boré méoré haèch » et on contemple le feu à la lueur des ongles de ses mains. Enfin, on reprend la coupe et on dit la dernière bénédiction, la Havdala au sens strict du terme, évoquant la distinction entre le sacré et le profane, la lumière et les ténèbres, Israël et les autres peuples, le septième jour et les six jours ouvrables, et louant le Créateur pour cette distinction : « Baroukh atta Hachem, élokénou mélèkh haolam, hamavdil ben kodèch le’hol, ouvèn or lé’hochèkh, ouvèn israël laamim, ouvèn yom hachvii léchèt yémé hamassé. Baroukh atta Hachem, hamavdil ben kodèch lé’hol ». L’officiant boit la majeure partie de la coupe - contrairement à shabbath, seul l’officiant boit - puis éteint la flamme avec le restant du vin, ou en la plongeant dans celui qui est tombé dans l’assiette. Certains ont ensuite coutume de se mettre une goutte de vin sur la nuque, et de sentir la bougie éteinte, dont on dit que l’odeur est celle du jardin d’Eden…cela pour s’imprégner un peu plus de ces tout derniers instants shabbatiques… Puis on n’oubliera pas de prononcer la bénédiction après la consommation de vin."
    },
    {
        question: "Peut-on utiliser un parapluie pendant Yom Tov ?",
        answer: "On ne peut pas utiliser de parapluie Yom tov car à part okhel nefech toutes les lois de chabbat sont valables pour Yom tov."
    },
    {
        question: "Comment porter ses clefs le Shabbat ?",
        answer: "Accrocher les clés à la ceinture (il faut que la clé fasse partie intégrante de la ceinture, comme un maillon), pour que celles-ci soit considérées comme partie intégrante des habits."
    },
    {
        question: "Qu’est-ce qu’un Mah’zor ?",
        answer: "Le Mahzor (« cycle », « retourner ») est un livre contenant les prières et les pièces liturgiques des fêtes revenant chaque année, à savoir les Jours redoutables et les Trois Fêtes de Pèlerinage (PessaH'/Chavouôt/Soukot). En ce sens, il constitue une version spécialisée du siddour, livre de prière utilisé pour les jours de semaine et le chabbat, auquel il vient en complément."
    },
    {
        question: "Citez les jours où l’on ne met pas les tefillins.",
        answer: "Il est obligatoire de mettre les Téfilines tous les jours de l'année excepté le Chabbath, les jours de fête et demi-fêtes (‘hol hamoëd). Le jour du 17 Tamouz + 9 Av, il est obligatoire de mettre les Téfilines, comme à l'accoutumée. Il est à noter que le \"Onen\" n'a pas l'obligation de mettre les Téfilines. \"Onen\" est le statut d'une personne avant l'enterrement de l'un des proches mentionnés dans la Halakha."
    },
    {
        question: "Citez le jour où l’on ne met pas de Talith à l’office du matin.",
        answer: "Le 9 Av, à l'office du matin, on ne mettra ni le Talith (pour le Talith katane, on le mettra sans bénédiction), ni les Téphilines. Ils seront portés à l'office de Min'ha."
    },
    {
        question: "Qu’est-ce que le h’amèts ?",
        answer: "On range sous l’appellation h’amèts tout produit composé d'une des 5 espèces des céréales suivantes : blé, orge, avoine, épeautre, seigle, qui sous l'action de ferments, de la chaleur, ou de l'humidité subissent le processus de la fermentation."
    },
    {
        question: "Citez les interdictions de Pessah concernant le h’amèts.",
        answer: "- CONSOMMER du 'hamets, même en infime quantité. Cette interdiction entraîne la nécessité d'utiliser pour Pessah une vaisselle spéciale ou de procéder à la cachérisation des ustensiles \" cachérisables \". - AVOIR du 'hamets nous appartenant ou d'en posséder cette interdiction entraîne l'obligation de le faire disparaître avant la fête. La Torah interdit également de garder chez soi ou dans tout autre endroit nous appartenant, du 'hamets qui appartiendrait à un non juif et pour lequel nous serions responsables de sa garde. - TIRER TOUT PROFIT du 'hamets. Ansi, du 'hamets ayant appartenu à un Juif et n'ayant pas été vendu pendant pessa’h est interdit même après pessa’h. En conséquence, on ne se servira pas chez un commerçant juif n'ayant pas procédé à la vente de son 'hamets avant pessa’h, et ce jusqu’à renouvellement de son stock."
    },
    {
        question: "Qu’est-ce que la haftara ?",
        answer: "Lu publiquement à la synagogue après la lecture de la parasha, lors du chabbat ou des jours de fêtes juives, le Maftir lit le chapitre concerné dans le Livre des Prophètes = c’est la Haftara, dont le thème est en rapport avec la parasha correspondante. Le Maftir (celui qui lit la haftara) prononce alors une bénédiction avant et après la lecture (après = les quatre bénédictions qui concernent le Chabbath) chantée de la Haftarah. Le maftir a lu également le dernier passage de la Torah. Elle peut être lue par un enfant qui n'est pas encore bar-mitsvah."
    },
    {
        question: "Quels jours lit-on la Torah en public ?",
        answer: "Les jours où la Torah est lue en public : Lundi et Jeudi, Chabbat, Roch Hodech, jours de fête, jours de jeûne, Hannouca, Pourim"
    },
    {
        question: "Quels jours lit-on la haftara ?",
        answer: "On ne lit une haftara dans les prophètes que : les Chabbat, les jours de fête, le 9 Av"
    },
    {
        question: "Comment chauffer un biberon le Shabbath ?",
        answer: "Il est absolument complètement catégoriquement interdit par la Torah de poser de l'eau froide sur la plata pendant Chabbat bien qu'elle ait été bouillie la veille : c'est comme allumer du feu ! Il faut donc remplir un bol avec de l'eau chaude du koumkoum et laisser tremper le biberon en bain-marie dedans jusqu'à la bonne température : cela est complètement permis car le bol est un kéli cheni. "
    },
    {
        question: "Qu’est-ce qu’un Erouv h’atsérot ?",
        answer: "Qui permet de transformer le domaine public de la semaine en domaine privé le shabbat pour qu’on puisse porter."
    },
    {
        question: "Qu’est-ce qu’un Erouv Tavchilin ?",
        answer: "Qui permet de cuire de la nourriture pendant yom tov destinée à être consommée le shabbat quand yom tov tombe le jeudi ou le vendredi."
    },
    {
        question: "Combien de pâte faut-il pétrir pour prélever la h’alla ?",
        answer: "1.2kg"
    },
    {
        question: "Combien de temps doit-on attendre entre le lait et la viande ?",
        answer: "0h si fromage doux et mou. 6h si pâte dure et gout fort."
    },
    {
        question: "Entre la viande et le lait ?",
        answer: "6h"
    },
    {
        question: "Entre un sandwich au gruyère et un steak ?",
        answer: "6h"
    },
    {
        question: "Peut-on entrer dans une église ? dans une mosquée ?",
        answer: "Non/oui"
    },
    {
        question: "Peut-on ouvrir une lettre le chabbat ?",
        answer: "Non"
    },
    {
        question: "Peut-on porter un bébé le chabbat pour l’amener à la synagogue ?",
        answer: "Non"
    },
    {
        question: "Quel jour est-il interdit de pratiquer la circoncision ?",
        answer: "Aucun"
    },
    {
        question: "Quel jour rappelle le bris des tables de la Loi ?",
        answer: "17 Tamouz"
    },
    {
        question: "Quel jour commémore la destruction des 2 Temples de Jérusalem ?",
        answer: "9 Av"
    },
    {
        question: "Qu’est-ce que le Kaddiche ?",
        answer: "Prière pour l’élévation de l’âme des personnes décédées"
    },
    {
        question: "Quelle prière est récitée selon les jours 3, 4 ou 5 fois ?",
        answer: "Chema Israel"
    },
    {
        question: "Lit-on la Torah les jours de mariages ?",
        answer: "Non"
    },
    {
        question: "Qu’est-ce qu’une Kétouba ?",
        answer: "Un acte de Mariage"
    },
    {
        question: "Peut-on prêter à un juif de l’argent avec intérêt, à un non juif ?",
        answer: "Non / Oui"
    },
    {
        question: "Quand doit-on payer un salarié occasionnel, à plein temps ?",
        answer: "vendredi matin / fin de mois"
    },
    {
        question: "Qui était Jonas ?",
        answer: "Prophète qui ne croyait pas en la toute puissance divine. Il pose la question de la foi dans le judaïsme. Haftara lue à Kippour / baleine"
    },
    {
        question: "Dans quel lieu ne pose-t-on pas de Mézouza ?",
        answer: "Toilettes et salles de bain"
    },
    {
        question: "Peut-on regarder la télévision le Chabbat ?",
        answer: "Oui si elle a été allumée avant Chabbat mais ça n’est pas vraiment dans l’esprit de Chabbat"
    },
    {
        question: "Comment chauffer des aliments le Chabbat ?",
        answer: "Avec la plata, si les aliments sont solides (car ne peuvent pas être cuit deux fois) pas s’ils sont liquides."
    },
    {
        question: "Peut-on mettre la table samedi après-midi pour après chabbat ?",
        answer: "Non"
    },
    {
        question: "Qu’est-ce que les Pirké Avot ?",
        answer: "Traité Talmudique qui est lu entre Pessah et Chavouot"
    },
    {
        question: "Une souka peut-elle être construite sous un balcon ? sur un balcon ?",
        answer: "Non/ Oui si on voit le ciel"
    },
    {
        question: "Citez les 4 espèces du loulav.",
        answer: "1 loulav, 1 etrog, 3 Hadassim, 2 Aravot"
    },
    {
        question: "Combien de temps doivent brûler les bougies de H’anouka et quand ?",
        answer: "30 minutes à partir de la tombée de la nuit"
    },
    {
        question: "Qui allume les bougies de H’anouka ?",
        answer: "Le père de famille"
    },
    {
        question: "Que signifie la bénédiction de « Chéhéh’éyanou » et quand la récite-t-on ?",
        answer: "Cette Berakha se dit à l’occasion des premiers soirs de fêtes joyeuses et des mitzvot qui y sont rattachées, avant de consommer un nouveau fruit de l’année ou un nouvel habit."
    },
    {
        question: "Qu’est-ce que la Michna ?",
        answer: "Rédigé par les Tanaïm après la destruction du 2nd temple par crainte que la loi orale ne s’évanouisse du fait des nombreuses invasions et influences néfastes des Goyim. Il s’agit du premier écrit de la loi orale donnée sur le mont Sinaï à Moshé en même temps que la Torah écrite (Torah ché bé al pé transmise à Moshé sur le mont Sinaï puis transmis à Josué .. jusqu’à la Grande Assemblée, ancêtre du Sanhédrin). Rédigé par les Tannaim et compilé par rabbi yehouda hanassi dans 6 traités reprenant les thèmes principaux de la loi, sorte de clôture de la Mishna. "
    },
    {
        question: "Citez la date de Roch Hachana.",
        answer: "1 et 2 Tichri"
    },
    {
        question: "Peut-on corriger un séfer Torah le chabbat ?",
        answer: "Non"
    },
    {
        question: "Peut-on fixer une Mézouza qui est tombée pendant Chabbat ?",
        answer: "Non"
    },
    {
        question: "Qu’est qu’un Siddour ?",
        answer: "Désigne un livre de prière regroupant l'ensemble des prièrs journalières pour les jours ouvrés, yemey 'hol, le shabbat ainsi que les principaux textes des fêtes les plus importantes (essentiellement la Amida des fêtes)."
    },
    {
        question: "Qu’est-ce qu’une Haggaddah ?",
        answer: "Haggada, signifie récit, pluriel haggadot"
    },
    {
        question: "Peut-on coller un timbre sur une lettre le 1er jour de Soukot ? Le 4ème jour ?",
        answer: "Non/Oui"
    },
    {
        question: "Quand récite-t-on le Chéma ?",
        answer: "Seule prière obligatoire d’après la Torah. Se lit à chaharit, à arvit et keriat chéma avant de dormir. 1 : profession de foi du judaïsme, proclamation de la royauté divine. 2 : reprise du thème du 1er paragraphe mais ajout de promesses et de menaces. 3 : prescription du port des tsitsiths ainsi que rappel de la sortie d’Egypte."
    },
    {
        question: "Doit-on prévenir un médecin le chabbat en cas de danger sérieux pour le malade ?",
        answer: "Oui"
    },
    {
        question: "Citez les 5 interdictions de Yom Kippour.",
        answer: "Boire, manger, se laver, se parfumer, porter des chaussures de cuir, avoir des relations conjugales."
    },
    {
        question: "Qu’est-ce que le Hallèl ? quand le récite-t-on ?",
        answer: "Louanges à HM attribuées à David. Psaumes 113 à 118 soit 6 psaumes lus partiellement ou entièrement à certaines fêtes. On flatte HM et on relève ses miracles, on ne le lit pas à Roch Hachana pour cette raison et on se lève pdt sa lecture. Il existe une forme abrégée du Hallèl. Quand ? Hallèl complet les 2 1ers jours de Pessa’h, tous les jours de Hanoukka, tous les jours de soukkot, chavouot, yom Haatsmaout. On ne le lit pas à pourim car c’est la Méguila qui joue ce rôle, ni à Roch Hachana et kippour car on ne loue pas HM quand il nous juge. Hallèl abrégé les derniers jours de Pessa’h et Roch Hodèche. La bénédiction du Hallèl ne se lit que lorsqu’on lit le Hallèl complet et en communauté. Si on est ya’hid on ne la fait pas"
    },
    {
        question: "Qu’est-ce que la séouda chélichite ?",
        answer: "3ème repas de Chabbath"
    },
    {
        question: "Qu’est-ce que le Talmud ?",
        answer: "Torah – Tannaïms ont expliqué la Torah, leurs explications ont été rédigées pour ne pas être perdues =  la Michna LOI ECRITE. Par la suite les amoraim qui étaient les élèves des Tannaims ont commentés les écrits de la Michna = la guemarra. MICHNA + GUEMARA = TALMUD. Le matériel de discussion qui a conduit à la rédaction du Talmud est principalement la Halakha (loi orale) et la Haggada (récit historique plaçant le contexte historique)."
    },
    {
        question: "A quelle époque a été rédigé le Talmud ?",
        answer: "2eme siecle"
    },
    {
        question: "Que doit-on faire avant de prier ?",
        answer: "a. S’habiller de façon digne et appropriée. b. Donner la tesdaka. c. Ne pas penser à autre chose, ne rien faire en même temps. d. S’assurer d’être dans un endroit propre. e. Aller aux toilettes et faire netilat yadaim litefilah (sans bénédiction). Interdit de prier devant un miroir ou un tableau/dessin, le mieux face au mur. S’efforcer de prier en communauté pour pouvoir faire le kaddich."
    },
    {
        question: "Qu’est-ce que minh’a ?",
        answer: "Prière de l’après midi"
    },
    {
        question: "Peut-on accomplir la mitsva de tsédaka le chabbat ?",
        answer: "Non, mais il est bien de le faire avant l’entrée de chabbat"
    },
    {
        question: "Peut-on accomplir la Mitsva de Bikour h’olim (rendre visite aux malades) le chabbat ?",
        answer: "Oui"
    },
    {
        question: "Une femme mariée doit-elle se couvrir la tête ? OÙ ? Quand ?",
        answer: "OUI tout le temps sauf quand elle dort"
    },
    {
        question: "Même question pour une divorcée, pour une veuve :",
        answer: "OUI"
    },
    {
        question: "Quels sont les devoirs du père vis à vis de son enfant ?",
        answer: "Education des enfants : initier ses enfants au judaïsme, récitation des berahot, étude torah, berit mila et barmitzva…"
    },
    {
        question: "Peut-on célébrer un mariage durant H’anouka ? durant Soukot ?",
        answer: "Oui / Non Yom Tov mais oui Hol Amoed"
    },
    {
        question: "Qu’appelle-t-on les 3 semaines ou « Ben Hamétsarim » ?",
        answer: "Les trois semaines séparant le jeûne du 17 tamouz à celui du 9 av sont traditionnellement appelées : « Ben HaMétsarim », littéralement : « Entre les étroits défilés » (d’après Ekha 1, 3). De fait, ces jours symbolisent l’oppression ressentie par le peuple juif suite à la destruction des deux Temples de Jérusalem."
    },
    {
        question: "Quelles sont les fêtes austères ?",
        answer: "Kippour et Roch Hachana"
    },
    {
        question: "Un juif peut-il pratiquer l’euthanasie ?",
        answer: "Non"
    },
    {
        question: "Quels doivent être les soucis principaux d’un juif qui choisit un nouvel appartement ?",
        answer: "S’il est possible d’y faire Chabbath, que ça ne soit pas loin de la synagogue et qu’on puisse y mettre une mezouza"
    },
    {
        question: "Peut-on acheter n’importe quel fromage dans le commerce ?",
        answer: "Non il faut les acheter dans un supermarché casher avec téouda."
    },
    {
        question: "Quel est l’autre nom de Jacob ?",
        answer: "Israel"
    },
    {
        question: "Combien d’enfants avait Jacob ?",
        answer: "13 (12 tribus d’Israêl + Dina sa fille)"
    },
    {
        question: "Un juif peut-il vivre en Egypte ?",
        answer: "Non"
    },
    {
        question: "Agite-t-on le loulav, le jour de Simh’at Torah ?",
        answer: "NON"
    },
    {
        question: "Que célèbre Simh’at Torah ?",
        answer: "Conclusion et recommencement de la lecture de la Torah (9ème jour de soukkot)"
    },
    {
        question: "En combien de temps lit-on publiquement toute la Torah à raison d’une paracha par semaine ?",
        answer: "54"
    },
    {
        question: "Récitez la bénédiction après avoir bu du Coca Cola.",
        answer: "Boré Nefachot"
    },
    {
        question: "Quelles sont les limites de l’étude de la Torah ?",
        answer: "Aucune"
    },
    {
        question: "Peut-on voyager un vendredi ?",
        answer: "Ce n’est pas recommandé mais oui jusqu’à vendredi midi (en cas d’imprévu)"
    },
    {
        question: "Citez 3 commandements concernant les relations avec le prochain.",
        answer: "Tu ne tueras point, Tu ne commettras pas d’adultère, Tu ne voleras pas, Tu ne porteras pas de faux témoignage contre ton prochain, Tu ne convoiteras pas ce qui appartient à ton prochain"
    },
    {
        question: "Peut-on prier devant :",
        answer: "Non devant un miroir, Non devant une photo, Oui dans la rue, Oui dans une voiture"
    },
    {
        question: "Tous les vins sont-ils cacher ?",
        answer: "Non"
    },
    {
        question: "Peut-on boire du vin ouvert par un non juif ? touché par un non-juif ?",
        answer: "Non / Non"
    },
    {
        question: "Qu’est-ce que du vin « mévouchal » ? Quel avantage présente-t-il ?",
        answer: "Vin cuit pasteurisé qui peut être servi par un non juif sans être décachérisé"
    },
    {
        question: "Un séfer Torah peut-il devenir « non cacher » ? et comment ?",
        answer: "Oui, il n’est plus cacher à partir du moment où certaines lettres viennent à s’effacer."
    },
    {
        question: "Peut-on écouter de l’Opéra ? (plusieurs réponses possibles)",
        answer: "Oui une femme a le droit d’écouter/ non pour un homme si voix féminines"
    },
    {
        question: "Les femmes ont-elles l’obligation de prier ?",
        answer: "Non / Mitzvah liée au temps"
    },
    {
        question: "Peut-on jouer d’un instrument de musique le chabbat ? Un yom tov ?",
        answer: "Non / Non"
    },
    {
        question: "Peut-on avoir un cuisinier non-juif chez soi ? si oui comment ?",
        answer: "Bichoul Goy = cuisson par un non-juif. Il est permis de consommer des légumes cuits par un non juif s’ils sont consommables avant leur cuisson (donc les légumes qui ne se mangent que cuits sont défendus). Pour tout produit qui ne se mange pas cru, il faut participer à la cuisson (enfourner, allumer, retourner…)"
    },
    {
        question: "Peut-on faire infuser du thé le chabbat ?",
        answer: "Non par contre préparer du thé a base de concentré, oui."
    },
    {
        question: "Peut-on avoir des employés de maison non juifs qui travaillent chez nous le chabbat ?",
        answer: "Oui"
    },
    {
        question: "Peut-on prendre une douche le chabbat ? un bain ? un bain de mer ?",
        answer: "Oui froide/ Non / Non"
    },
    {
        question: "Un cohen peut-il aller au cimetière ?",
        answer: "Non"
    },
    {
        question: "Récitez la bénédiction avant de manger de la salade verte, du chocolat.",
        answer: "Hadama, Chéhakol"
    },
    {
        question: "Citez 2 différences entre chabbat et yom tov.",
        answer: "Allumer à partir d’une flamme existante et porter dans le domaine public tout objet relatif à la fête et au plaisir"
    },
    {
        question: "Combien de personnes appelle-t-on à la Torah à Yom Kippour ?",
        answer: "6 le matin, 3 l’après midi"
    },
    {
        question: "Quelle est la date du jeûne de Guédaliah ?",
        answer: "3 Tichri"
    },
    {
        question: "Qui était Guédaliah ?",
        answer: "Gouverneur de Judée à la suite de la destruction de Jérusalem par Nabuchodonosor II et assassiné à Roch Hachana."
    },
    {
        question: "Qu’est-ce que la Téchouva ?",
        answer: "Processus de repentance dans le judaïsme. Conformément à la pratique juive, une faute, une erreur, un acte interdit, peuvent être pardonnés sous réserve d'engager une démarche de techouva."
    },
    {
        question: "Combien de mois a cette année juive ? Peut-il en être autrement et pourquoi ?",
        answer: "13, oui les années où il y a deux mois ADAR"
    },
    {
        question: "Quelle est la date de Pourim ?",
        answer: "14 Adar"
    },
    {
        question: "Citez les 5 mitsvot de Pourim.",
        answer: "Lecture de la Méguila d’Esther : on doit écouter la Méguila 2 fois, la nuit et le jour. Matanot Laévionim (dons aux nécessiteux : à au moins 2 personnes. Mishloa’h Manot (envoi de cadeaux aux amis) : 2 mets de nature différente. Mishtei (festin) et joie : à l’image du festin d’Esther arrosé de vin et dans la réjouissance. Ad yalo Yadaa, dans la joie : il faut s’enivrer jusqu’à ne plus distinguer Aman d’Asuérus et on se déguise, on ne doit ni pleurer si se disputer."
    },
    {
        question: "Quelle est la première chose que fait un Bar Mitsva ?",
        answer: "Mitsvah des Téfilin"
    },
    {
        question: "Qu’est-ce que les tsitsit ?",
        answer: "Franges situées aux 4 coins du talith rappelant les 4 point cardinaux et D. au delà. Composés de laine ou de soie. Il faut 4 fils par coin ce qui fait 8 fils. Ils rappellent aussi les 613 Mitzvot."
    },
    {
        question: "Combien de fils sont nécessaires à leur confection ?",
        answer: "8 fils"
    },
    {
        question: "Peut-on utiliser un rasoir à 2 lames ?",
        answer: "Non car c’est trop abrasif et risque de se couper"
    },
    {
        question: "Qu’est-ce que le Omer ?",
        answer: "période commencant le 2eme jour de Pessah jusqu’à la veille de Chavouot."
    },
    {
        question: "Peut-on se couper les ongles le chabbat ? des plantes vertes ?",
        answer: "Non / Non"
    },
    {
        question: "Qu’appelle-t-on le Mouktsé ?",
        answer: "Objet retranché / interdit le Chabbat"
    },
    {
        question: "Une femme peut-elle mettre les téfilin ?",
        answer: "Non"
    },
    {
        question: "Peut-on arroser des fleurs le chabbat ?",
        answer: "Non"
    },
    {
        question: "Peut-on mettre les téfilin la nuit ?",
        answer: "Non"
    },
    {
        question: "Combien de repas doit-on prendre le chabbat ?",
        answer: "3"
    },
    {
        question: "Est-il obligatoire de manger la veille de kippour ?",
        answer: "Oui"
    },
    {
        question: "Qu’est-ce que les kaparot ?",
        answer: "Sacrifices (poulet) la veille de Kippour, aujourd’hui souvent remplacé par tzedaka"
    },
    {
        question: "Qu’est-ce que H’ol Hamoèd ?",
        answer: "jours de demi-fetes"
    },
    {
        question: "Que fait-on dès la fin de kippour avant de manger ?",
        answer: "On commence à construire la Soukka"
    },
    {
        question: "Que signifie le terme Brit mila ?",
        answer: "L’alliance"
    },
    {
        question: "Qu’est-ce que les tah’anounim ?",
        answer: "(=supplications) Se dit à chaharit et min’ha selon conditions. Certains récitent avant cela le vidouïe (confession des fautes) ainsi que les 13 attributs divins. On récite plus de supplications les lundis et jeudis. On ne récite jamais les ta’hanoun la nuit. Ne se récite pas non plus à chabbat, fêtes, roch hodeche, veille de roch hachana et yom kippour, lors d’un deuil, d’un mariage…"
    },
    {
        question: "A partir de quoi compte-t-on 5776 années ?",
        answer: "la création du monde, la naissance d’Adam"
    },
    {
        question: "Qui est le père de Salomon ? et sa mère ?",
        answer: "Le roi David, Bethsabée"
    },
    {
        question: "Lit-on les psaumes dans la liturgie juive ?",
        answer: "Oui"
    },
    {
        question: "Peut-on se parfumer le chabbat ?",
        answer: "Oui mais sur la peau pas sur les vetements."
    },
    {
        question: "Une femme peut-elle se maquiller le chabbat ?",
        answer: "Non, mais une poudre libre peut etre tolérée."
    },
    {
        question: "Peut-on cachériser le foie au four ? une autre viande ?",
        answer: "Oui par grillage sur une grille et si écoulement du sang, oui une autre viande"
    },
    {
        question: "Peut-on cachériser (pour le changer de destination lait/viande par ex.) un four ? un four à pyrolyse ? un micro-ondes ? un lave-vaisselle ? un lave-linge ?",
        answer: "Four : Non. Four à Pyrolyse : Oui. Un Micro-ondes : Oui. Un lave-vaisselle : Oui. Un lave-linge : ??"
    },
    {
        question: "Doit-on tremper un mixer électrique au mikvé ?",
        answer: "Oui sauf les parties électriques, il faut donc démonter pour pouvoir tremper"
    },
    {
        question: "Qu’est-ce que Tou bichevat ?",
        answer: "Le nouvel An des arbres"
    },
    {
        question: "Citez les 7 fruits d’Israël.",
        answer: "Blé, orge, figue, raisin, datte, grenade, olive"
    },
    {
        question: "Peut-on manger des fruits qui ont poussé en Israël à tout moment ?",
        answer: "Non, pas pendant l’année de la chemita"
    },
    {
        question: "Qui est le Messie ? de qui doit-il descendre ?",
        answer: "Le messie viendra du roi David"
    },
    {
        question: "Qu’est-ce que Yom Haatsmaout ? Donnez la date.",
        answer: "Le jour de la commémoration de la création d’indépendance l’état d’Israel – 5 Iyar"
    },
    {
        question: "Même questions pour Lag Baomer.",
        answer: "Illoula de Rabbi Shimon Bar Yo’haï et fin de l’épidémie des élèves de rabbi Akiva. – 18 Iyar – 33 eme jour du Omer"
    },
    {
        question: "Y-a-t-il des aliments que l’on mange sans bénédiction ?",
        answer: "Non"
    },
    {
        question: "Quelle est la date de Chavouoth ?",
        answer: "6 – 7 Sivan"
    },
    {
        question: "Combien de commandements y-a-t-il dans la Torah ?",
        answer: "613"
    },
    {
        question: "Combien de commandements doivent accomplir les descendants de Noé ?",
        answer: "7"
    },
    {
        question: "Combien de commandements positifs ont institué les rabbins ?",
        answer: "7"
    },
    {
        question: "Croyons-nous en la résurrection des morts ?",
        answer: "Oui"
    },
    {
        question: "Croyons-nous en la vie éternelle et en la pérennité de l’âme ?",
        answer: "Oui"
    },
    {
        question: "Quels sont les commandements qu’on ne doit jamais transgresser même au péril de sa vie ?",
        answer: "Tu ne tueras point, Tu n’auras pas d’autre D. que moi, tu ne feras pas d’idole, Tu ne commettras pas l’adultère"
    },
    {
        question: "Qu’est-ce que le h’illoul Hachem ? (donnez un exemple)",
        answer: "profanation du nom divin. Toute conduite ou acte qui conduit celui ou ceux qui en sont témoins à dénigrer D, sa Torah et ses commandements. Un juif qui vole profane le nom Divin car en plus d’être un acte interdit, il entache la réputation de tout Israël."
    },
    {
        question: "Qu’est-ce que le kiddouche Hachem ? (donnez un exemple)",
        answer: "Sanctification du nom divin / avoir un bon comportement en public"
    },
    {
        question: "Qu’est-ce qu’un talith katan ?",
        answer: "Le talith est le chale de prière réservé aux hommes et qui se met à chaharit et tout yom kippour. Obligation du jour mais pas interdit la nuit."
    },
    {
        question: "Un juif peut-il exercer n’importe quelle profession ?",
        answer: "non car certaines ne permettent pas de respecter la religion"
    },
    {
        question: "Peut-on toucher de l’argent le chabbat ? en dépenser ?",
        answer: "Non / Non"
    },
    {
        question: "Peut-on faire du roller le chabbat ? du vélo ?",
        answer: "Non / Non"
    },
    {
        question: "Comment ouvrir une boite de conserve le chabbat ?",
        answer: "En la perçant des 2 cotes pour qu’elle ne puisse pas servir de contenant par la suite."
    },
    {
        question: "Peut-on aller au théâtre le chabbat si on a payé les places d’avance ?",
        answer: "Non"
    },
    {
        question: "Peut-on jouer au Scrabble le chabbat ? au poker ?",
        answer: "Non car écrire/ Non car trier les cartes et compter"
    },
    {
        question: "Récitez la bénédiction de la Torah.",
        answer: "Baroukh ata Adonaï, élohénou mélekh ha’olam, acher kidéchanou bémitsvotav, vétsivanou al divré Torah."
    }
];

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    answerElement.innerHTML = `<p>${currentQuestion.answer}</p>`;

    document.getElementById('card').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    document.getElementById('score').innerText = score;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz terminé ! Votre score final est de " + score + ".");
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Charger la première question au chargement de la page
loadQuestion();
