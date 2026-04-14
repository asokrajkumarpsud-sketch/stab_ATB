const ATB_DATA = [
    {Mol:"Amoxicilline",Solv:"NaCl",Disp:"Pompe",Min:0,Max:10,Dil:"Entre 0 et 5 g dans 250mL",Conc:"20 mg/mL",Stab:12,Com:""},
    {Mol:"Amoxicilline",Solv:"NaCl",Disp:"Pompe",Min:10.1,Max:20,Dil:"Entre 6 et 10 g dans 500mL",Conc:"20 mg/mL",Stab:12,Com:""},
    {Mol:"Amoxicilline",Solv:"NaCl",Disp:"Pompe",Min:20.1,Max:24,Dil:"Entre 6 et 9 g dans 500mL",Conc:"20 mg/mL",Stab:8,Com:""},

    {Mol:"Aztreonam",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Aztreonam",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Aztreonam",Solv:"NaCl",Disp:"Pompe",Min:0,Max:8,Dil:"Entre 0 et 8 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Aztreonam",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Aztreonam",Solv:"G5",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Aztreonam",Solv:"G5",Disp:"Pompe",Min:0,Max:8,Dil:"Entre 0 et 8 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},

    {Mol:"Cefazoline",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cefazoline",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Cefazoline",Solv:"NaCl",Disp:"Pompe",Min:0,Max:10,Dil:"Entre 0 et 10 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},

    {Mol:"Cefepime",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cefepime",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Cefepime",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cefepime",Solv:"G5",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},

    {Mol:"Cefiderocol",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 3 g dans 50mL",Conc:"62,5 mg/mL",Stab:12,Com:""},
    {Mol:"Cefiderocol",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 3 g dans 50mL",Conc:"62,5 mg/mL",Stab:6,Com:""},
    {Mol:"Cefiderocol",Solv:"NaCl",Disp:"Pompe",Min:0,Max:8,Dil:"Entre 0 et 8 g dans 100mL",Conc:"62,5 mg/mL",Stab:24,Com:"Sur-remplissage de 30 mL dans une poche de 100 mL préféré à l'utilisation d'une poche de 250 mL"},
    {Mol:"Cefiderocol",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 3 g dans 50mL",Conc:"62,5 mg/mL",Stab:12,Com:""},
    {Mol:"Cefiderocol",Solv:"G5",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 3 g dans 50mL",Conc:"62,5 mg/mL",Stab:6,Com:""},
    {Mol:"Cefiderocol",Solv:"G5",Disp:"Pompe",Min:0,Max:8,Dil:"Entre 0 et 8 g dans 100mL",Conc:"62,5 mg/mL",Stab:24,Com:"Sur-remplissage de 30 mL dans une poche de 100 mL préféré à l'utilisation d'une poche de 250 mL"},

    {Mol:"Cefotaxime",Solv:"NaCl",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 250mL",Conc:"50 mg/mL",Stab:24,Com:"G 5 % possible pour les PSE à 125 mg/mL sur 6 h, ou pour des poches sans dépasser 20 mg/mL."},
    {Mol:"Cefotaxime",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:8,Com:"G 5 % possible pour les PSE à 125 mg/mL sur 6 h, ou pour des poches sans dépasser 20 mg/mL."},
    {Mol:"Cefotaxime",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:24,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:6,Com:"G 5 % possible pour les PSE à 125 mg/mL sur 6 h, ou pour des poches sans dépasser 20 mg/mL."},
    {Mol:"Cefotaxime",Solv:"NaCl",Disp:"Pompe",Min:12.01,Max:24,Dil:"Entre 12 et 24 g dans 500mL",Conc:"50 mg/mL",Stab:24,Com:"G 5 % possible pour les PSE à 125 mg/mL sur 6 h, ou pour des poches sans dépasser 20 mg/mL."},

    {Mol:"Cefoxitine",Solv:"G5",Disp:"PSE",Min:0,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},

    {Mol:"Ceftazidime",Solv:"NaCl",Disp:"PSE",Min:0,Max:8,Dil:"Entre 0 et 4 g dans 50 mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Ceftazidime/avibactam",Solv:"Nacl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 2 g dans 50mL",Conc:"80 mg/mL",Stab:8,Com:""},
    {Mol:"Ceftazidime/avibactam",Solv:"Nacl",Disp:"PSE",Min:6.01,Max:8,Dil:"Entre 2 et 4 g dans 50mL",Conc:"80 mg/mL",Stab:12,Com:""},
    {Mol:"Ceftazidime/avibactam",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 2 g dans 50mL",Conc:"80 mg/mL",Stab:8,Com:""},
    {Mol:"Ceftazidime/avibactam",Solv:"G5",Disp:"PSE",Min:6.01,Max:8,Dil:"Entre 2 et 4 g dans 50mL",Conc:"80 mg/mL",Stab:12,Com:""},

    {Mol:"Ceftolozane/tazobactam",Solv:"NaCl",Disp:"PSE",Min:0,Max:3,Dil:"Entre 0 et 3 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:"Attention flacon de 2g/0,5g"},
    {Mol:"Ceftolozane/tazobactam",Solv:"NaCl",Disp:"PSE",Min:3.01,Max:6,Dil:"Entre 0 et 3 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:"Attention flacon de 2g/0,5g"},
    {Mol:"Ceftolozane/tazobactam",Solv:"NaCl",Disp:"Pompe",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:"Attention flacon de 2g/0,5g"},
    {Mol:"Ceftolozane/tazobactam",Solv:"NaCl",Disp:"Pompe",Min:6,Max:12,Dil:"Entre 6 et 10 g dans 250mL",Conc:"125 mg/mL",Stab:24,Com:"Attention flacon de 2g/0,5g"},
    {Mol:"Ceftolozane/tazobactam",Solv:"G5",Disp:"PSE",Min:0,Max:3,Dil:"Entre 0 et 3 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:"Attention flacon de 2g/0,5g"},
    {Mol:"Ceftolozane/tazobactam",Solv:"G5",Disp:"PSE",Min:3.01,Max:6,Dil:"Entre 0 et 3 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:"Attention flacon de 2g/0,5g"},

    {Mol:"Clindamycine",Solv:"NaCl",Disp:"PSE",Min:0,Max:3.6,Dil:"Entre 0 et 3,6 g dans 50mL",Conc:"60 mg/mL",Stab:24,Com:""},

    {Mol:"Cloxacilline",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cloxacilline",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Cloxacilline",Solv:"NaCl",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cloxacilline",Solv:"NaCl",Disp:"Pompe",Min:12.01,Max:16,Dil:"Entre 0 et 16 g dans 250 mL",Conc:"125 mg/mL",Stab:24,Com:""},

    {Mol:"Cloxacilline",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cloxacilline",Solv:"G5",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Cloxacilline",Solv:"G5",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Cloxacilline",Solv:"G5",Disp:"Pompe",Min:12.01,Max:16,Dil:"Entre 0 et 16 g dans 250 mL",Conc:"125 mg/mL",Stab:12,Com:""},

    {Mol:"Meropeneme",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 2 g dans 50mL",Conc:"40 mg/mL",Stab:8,Com:""},

    {Mol:"Meropeneme/Vaborbactam",Solv:"NaCl",Disp:"Pompe",Min:0,Max:6,Dil:"Entre 0 et 2 g dans 250mL",Conc:"40 mg/mL",Stab:8,Com:""},

    {Mol:"Piperacilline",Solv:"NaCl",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline",Solv:"NaCl",Disp:"PSE",Min:0,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Piperacilline",Solv:"NaCl",Disp:"Pompe",Min:12.01,Max:20,Dil:"Entre 0 et 20 g dans 250 mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline",Solv:"NaCl",Disp:"PSE",Min:12.01,Max:24,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:6,Com:""},

    {Mol:"Piperacilline",Solv:"G5",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline",Solv:"G5",Disp:"PSE",Min:0,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Piperacilline",Solv:"G5",Disp:"Pompe",Min:12.01,Max:20,Dil:"Entre 0 et 20 g dans 250 mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline",Solv:"G5",Disp:"PSE",Min:12.01,Max:24,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:6,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"NaCl",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"NaCl",Disp:"PSE",Min:0,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"NaCl",Disp:"Pompe",Min:12.01,Max:20,Dil:"Entre 0 et 20 g dans 250 mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"NaCl",Disp:"PSE",Min:12.01,Max:24,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:6,Com:""},

    {Mol:"Piperacilline/Tazobactam",Solv:"G5",Disp:"Pompe",Min:0,Max:12,Dil:"Entre 0 et 12 g dans 100mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"G5",Disp:"PSE",Min:0,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"G5",Disp:"Pompe",Min:12.01,Max:20,Dil:"Entre 0 et 20 g dans 250 mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Piperacilline/Tazobactam",Solv:"G5",Disp:"PSE",Min:12.01,Max:24,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:6,Com:""},

    {Mol:"Temocilline",Solv:"NaCl",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Temocilline",Solv:"NaCl",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},
    {Mol:"Temocilline",Solv:"G5",Disp:"PSE",Min:0,Max:6,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:24,Com:""},
    {Mol:"Temocilline",Solv:"G5",Disp:"PSE",Min:6.01,Max:12,Dil:"Entre 0 et 6 g dans 50mL",Conc:"125 mg/mL",Stab:12,Com:""},

    {Mol:"Vancomycine VVP",Solv:"NaCl",Disp:"Pompe",Min:0,Max:1.25,Dil:"Entre 0 et 1,25 g dans 250mL",Conc:"5 mg/mL",Stab:24,Com:""},
    {Mol:"Vancomycine VVP",Solv:"NaCl",Disp:"Pompe",Min:1.25,Max:2.5,Dil:"Entre 1,25 et 2,5 g dans 500mL",Conc:"5 mg/mL",Stab:24,Com:""},
    {Mol:"Vancomycine VVP",Solv:"NaCl",Disp:"Pompe",Min:2.5,Max:5,Dil:"Entre 2,5 et 5 g dans 1000mL",Conc:"5 mg/mL",Stab:24,Com:""},

    {Mol:"Vancomycine VVP",Solv:"G5",Disp:"Pompe",Min:0,Max:1.25,Dil:"Entre 0 et 1,25 g dans 250mL",Conc:"5 mg/mL",Stab:24,Com:""},
    {Mol:"Vancomycine VVP",Solv:"G5",Disp:"Pompe",Min:1.25,Max:2.5,Dil:"Entre 1,25 et 2,5 g dans 500mL",Conc:"5 mg/mL",Stab:24,Com:""},
    {Mol:"Vancomycine VVP",Solv:"G5",Disp:"Pompe",Min:2.5,Max:5,Dil:"Entre 2,5 et 5 g dans 1000mL",Conc:"5 mg/mL",Stab:24,Com:""},
    // --- Suite Vancomycine déjà incluse dans Bloc 3 ---

    // (Aucune autre molécule après Vancomycine dans ton fichier Excel)
    // Mais pour cohérence structurelle, je laisse ce bloc vide de nouvelles entrées.
];

