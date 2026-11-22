// London network data. Edit freely.
// Each line is a list of paths; neighbours in a path are connected, so branches are extra paths.
// "@N" sets the fare zone for that station and the ones after it, until the next marker.
// Identical names are one interchange (e.g. "Bank/Monument", "Paddington").
const NETWORK = [
{id:"bakerloo",label:"Bakerloo",color:"#B36305",paths:[
"@5 Harrow & Wealdstone,@4 Kenton,South Kenton,North Wembley,Wembley Central,@3 Stonebridge Park,Harlesden,Willesden Junction,@2 Kensal Green,Queen’s Park,Kilburn Park,Maida Vale,Warwick Avenue,@1 Paddington,Edgware Road (Bakerloo),Marylebone,Baker Street,Regent’s Park,Oxford Circus,Piccadilly Circus,Charing Cross,Embankment,Waterloo,Lambeth North,Elephant & Castle"]},
{id:"central",label:"Central",color:"#E32017",paths:[
"@6 West Ruislip,@5 Ruislip Gardens,South Ruislip,Northolt,@4 Greenford,Perivale,@3 Hanger Lane,@2 North Acton,East Acton,White City,Shepherd’s Bush,Holland Park,@1 Notting Hill Gate,Queensway,Lancaster Gate,Marble Arch,Bond Street,Oxford Circus,Tottenham Court Road,Holborn,Chancery Lane,St Paul’s,Bank/Monument,Liverpool Street,@2 Bethnal Green,Mile End,Stratford,@3 Leyton,Leytonstone,@4 Snaresbrook,South Woodford,Woodford,@5 Buckhurst Hill,@6 Loughton,Debden,Theydon Bois,Epping",
"@3 Ealing Broadway,West Acton,@2 North Acton",
"@3 Leytonstone,Wanstead,@4 Redbridge,Gants Hill,Newbury Park,Barkingside,Fairlop,Hainault,Grange Hill,Chigwell,Roding Valley,Woodford"]},
{id:"circle",label:"Circle",color:"#FFD300",paths:[
"@2 Hammersmith (H&C),Goldhawk Road,Shepherd’s Bush Market,Wood Lane,Latimer Road,Ladbroke Grove,Westbourne Park,Royal Oak,@1 Paddington,Edgware Road (Circle),Baker Street,Great Portland Street,Euston Square,King’s Cross St Pancras,Farringdon,Barbican,Moorgate,Liverpool Street,Aldgate,Tower Hill,Bank/Monument,Cannon Street,Mansion House,Blackfriars,Temple,Embankment,Westminster,St James’s Park,Victoria,Sloane Square,South Kensington,Gloucester Road,High Street Kensington,Notting Hill Gate,Bayswater,Paddington"]},
{id:"district",label:"District",color:"#00782A",paths:[
"@1 Embankment,Temple,Blackfriars,Mansion House,Cannon Street,Bank/Monument,Tower Hill,Aldgate East,@2 Whitechapel,Stepney Green,Mile End,Bow Road,Bromley-by-Bow,@3 West Ham,Plaistow,Upton Park,East Ham,@4 Barking,Upney,@5 Becontree,Dagenham Heathway,Dagenham East,@6 Elm Park,Hornchurch,Upminster Bridge,Upminster",
"@1 Embankment,Westminster,St James’s Park,Victoria,Sloane Square,South Kensington,Gloucester Road,Earl’s Court",
"@1 Earl’s Court,@2 West Brompton,Fulham Broadway,Parsons Green,Putney Bridge,East Putney,@3 Southfields,Wimbledon Park,Wimbledon",
"@1 Earl’s Court,High Street Kensington,Notting Hill Gate,Bayswater,Paddington,Edgware Road (Circle)",
"@1 Earl’s Court,@2 West Kensington,Barons Court,Hammersmith,Ravenscourt Park,Stamford Brook,Turnham Green,@3 Gunnersbury,Kew Gardens,@4 Richmond",
"@2 Turnham Green,@3 Chiswick Park,Acton Town,Ealing Common,Ealing Broadway"]},
{id:"hammersmith",label:"Hammersmith & City",color:"#F3A9BB",paths:[
"@2 Hammersmith (H&C),Goldhawk Road,Shepherd’s Bush Market,Wood Lane,Latimer Road,Ladbroke Grove,Westbourne Park,Royal Oak,@1 Paddington,Edgware Road (Circle),Baker Street,Great Portland Street,Euston Square,King’s Cross St Pancras,Farringdon,Barbican,Moorgate,Liverpool Street,Aldgate East,@2 Whitechapel,Stepney Green,Mile End,Bow Road,Bromley-by-Bow,@3 West Ham,Plaistow,Upton Park,East Ham,@4 Barking"]},
{id:"jubilee",label:"Jubilee",color:"#A0A5A9",paths:[
"@5 Stanmore,Canons Park,@4 Queensbury,Kingsbury,Wembley Park,@3 Neasden,Dollis Hill,@2 Willesden Green,Kilburn,West Hampstead,Finchley Road,Swiss Cottage,St John’s Wood,@1 Baker Street,Bond Street,Green Park,Westminster,Waterloo,Southwark,London Bridge,@2 Bermondsey,Canada Water,Canary Wharf,North Greenwich,Canning Town,@3 West Ham,@2 Stratford"]},
{id:"metropolitan",label:"Metropolitan",color:"#9B0056",paths:[
"@1 Aldgate,Liverpool Street,Moorgate,Barbican,Farringdon,King’s Cross St Pancras,Euston Square,Great Portland Street,Baker Street,@2 Finchley Road,@4 Wembley Park,Preston Road,Northwick Park,@5 Harrow-on-the-Hill,North Harrow,Pinner,@6 Northwood Hills,Northwood,Moor Park,@7 Rickmansworth,Chorleywood,@8 Chalfont & Latimer,@9 Amersham",
"@8 Chalfont & Latimer,@9 Chesham",
"@6 Moor Park,@7 Croxley,Watford",
"@5 Harrow-on-the-Hill,West Harrow,Rayners Lane,Eastcote,@6 Ruislip Manor,Ruislip,Ickenham,Hillingdon,Uxbridge"]},
{id:"northern",label:"Northern",color:"#222222",paths:[
"@5 Edgware,@4 Burnt Oak,Colindale,@3 Hendon Central,Brent Cross,Golders Green,@2 Hampstead,Belsize Park,Chalk Farm,Camden Town",
"@5 High Barnet,Totteridge & Whetstone,@4 Woodside Park,West Finchley,Finchley Central,@3 East Finchley,Highgate,@2 Archway,Tufnell Park,Kentish Town,Camden Town",
"@4 Finchley Central,Mill Hill East",
"@2 Camden Town,Mornington Crescent,@1 Euston,Warren Street,Goodge Street,Tottenham Court Road,Leicester Square,Charing Cross,Embankment,Waterloo,@2 Kennington",
"@2 Camden Town,@1 Euston,King’s Cross St Pancras,Angel,Old Street,Moorgate,Bank/Monument,London Bridge,Borough,Elephant & Castle,@2 Kennington",
"@2 Kennington,Oval,Stockwell,Clapham North,Clapham Common,Clapham South,@3 Balham,Tooting Bec,Tooting Broadway,Colliers Wood,South Wimbledon,@4 Morden",
"@2 Kennington,@1 Nine Elms,Battersea Power Station"]},
{id:"piccadilly",label:"Piccadilly",color:"#003688",paths:[
"@5 Cockfosters,Oakwood,@4 Southgate,Arnos Grove,@3 Bounds Green,Wood Green,Turnpike Lane,@2 Manor House,Finsbury Park,Arsenal,Holloway Road,Caledonian Road,@1 King’s Cross St Pancras,Russell Square,Holborn,Covent Garden,Leicester Square,Piccadilly Circus,Green Park,Hyde Park Corner,Knightsbridge,South Kensington,Gloucester Road,Earl’s Court,@2 Barons Court,Hammersmith,@3 Acton Town",
"@3 Acton Town,South Ealing,Northfields,Boston Manor,@4 Osterley,Hounslow East,Hounslow Central,@5 Hounslow West,Hatton Cross",
"@5 Hatton Cross,@6 Heathrow Terminal 4",
"@5 Hatton Cross,@6 Heathrow Terminals 2 & 3,@5 Heathrow Terminal 5",
"@3 Acton Town,Ealing Common,North Ealing,Park Royal,@4 Alperton,Sudbury Town,Sudbury Hill,@5 South Harrow,Rayners Lane,Eastcote,@6 Ruislip Manor,Ruislip,Ickenham,Hillingdon,Uxbridge"]},
{id:"victoria",label:"Victoria",color:"#0098D4",paths:[
"@3 Walthamstow Central,Blackhorse Road,Tottenham Hale,Seven Sisters,@2 Finsbury Park,Highbury & Islington,@1 King’s Cross St Pancras,Euston,Warren Street,Oxford Circus,Green Park,Victoria,Pimlico,Vauxhall,@2 Stockwell,Brixton"]},
{id:"waterloo",label:"Waterloo & City",color:"#95CDBA",paths:["@1 Waterloo,Bank/Monument"]},
{id:"elizabeth",label:"Elizabeth line",color:"#6950A1",paths:[
"@9 Reading,Twyford,Maidenhead,Taplow,Burnham,Slough,@8 Langley,Iver,@6 West Drayton,@5 Hayes & Harlington,@4 Southall,@3 Hanwell,West Ealing,Ealing Broadway,Acton Main Line,@1 Paddington,Bond Street,Tottenham Court Road,Farringdon,Liverpool Street,@2 Whitechapel,Stratford,@3 Maryland,Forest Gate,@4 Manor Park,Ilford,Seven Kings,Goodmayes,@5 Chadwell Heath,@6 Romford,Gidea Park,Harold Wood,@9 Brentwood,Shenfield",
"@2 Whitechapel,Canary Wharf,@3 Custom House,@4 Woolwich,Abbey Wood",
"@5 Hayes & Harlington,@6 Heathrow Terminals 2 & 3,Heathrow Terminal 4"]},
{id:"dlr",label:"DLR",color:"#00AFAD",paths:[
"@1 Tower Gateway,@2 Shadwell,Limehouse,Westferry,Poplar",
"@1 Bank/Monument,@2 Shadwell",
"@2 Poplar,Blackwall,East India,Canning Town,@3 Royal Victoria,Custom House,Prince Regent,Royal Albert,Beckton Park,Cyprus,Gallions Reach,Beckton",
"@2 Poplar,West India Quay,Canary Wharf,Heron Quays,South Quay,Crossharbour,Mudchute,Island Gardens,Cutty Sark,Greenwich,Deptford Bridge,Elverson Road,Lewisham",
"@2 Stratford,Pudding Mill Lane,Bow Church,Devons Road,Langdon Park,All Saints,Poplar",
"@3 Stratford International,Stratford High Street,Abbey Road,Star Lane,West Ham,@2 Canning Town",
"@2 Canning Town,@3 West Silvertown,Pontoon Dock,London City Airport,King George V,@4 Woolwich Arsenal"]},
{id:"lioness",label:"Lioness (Overground)",color:"#FFA32B",paths:[
"@1 Euston,@2 South Hampstead,Kilburn High Road,Queen’s Park,Kensal Green,@3 Willesden Junction,Harlesden,Stonebridge Park,@4 Wembley Central,North Wembley,South Kenton,Kenton,@5 Harrow & Wealdstone,Headstone Lane,Hatch End,Carpenders Park,@6 Bushey,@7 Watford High Street,@8 Watford Junction"]},
{id:"mildmay",label:"Mildmay (Overground)",color:"#0072C6",paths:[
"@2 Stratford,Hackney Wick,Homerton,Hackney Central,Dalston Kingsland,Canonbury,Highbury & Islington,Caledonian Road & Barnsbury,Camden Road,Kentish Town West,Gospel Oak,Hampstead Heath,Finchley Road & Frognal,West Hampstead,Brondesbury,Brondesbury Park,Kensal Rise,@3 Willesden Junction,Acton Central,South Acton,Gunnersbury,Kew Gardens,@4 Richmond",
"@3 Willesden Junction,@2 Shepherd’s Bush,Kensington (Olympia),West Brompton,Imperial Wharf,Clapham Junction"]},
{id:"windrush",label:"Windrush (Overground)",color:"#E3335B",paths:[
"@2 Highbury & Islington,Canonbury,Dalston Junction,Haggerston,@1 Hoxton,Shoreditch High Street,@2 Whitechapel,Shadwell,Wapping,Rotherhithe,Canada Water,Surrey Quays,New Cross,New Cross Gate,Brockley,@3 Honor Oak Park,Forest Hill,Sydenham,Penge West,Crystal Palace",
"@3 Sydenham,Anerley,@4 Norwood Junction,@5 West Croydon",
"@2 Surrey Quays,Queens Road Peckham,Peckham Rye,Denmark Hill,Clapham High Street,Wandsworth Road,Clapham Junction"]},
{id:"weaver",label:"Weaver (Overground)",color:"#893B67",paths:[
"@1 Liverpool Street,@2 Bethnal Green,Cambridge Heath,London Fields,Hackney Downs,Rectory Road,Stoke Newington,@3 Stamford Hill,Seven Sisters,Bruce Grove,White Hart Lane,@4 Silver Street,Edmonton Green,@5 Bush Hill Park,Enfield Town",
"@4 Edmonton Green,@5 Southbury,Turkey Street,@7 Theobalds Grove,@8 Cheshunt",
"@2 Hackney Downs,Clapton,@3 St James Street,Walthamstow Central,@4 Wood Street,Highams Park,@5 Chingford"]},
{id:"suffragette",label:"Suffragette (Overground)",color:"#5FB46A",paths:[
"@2 Gospel Oak,Upper Holloway,@3 Crouch Hill,Harringay Green Lanes,South Tottenham,Blackhorse Road,Walthamstow Queen’s Road,Leyton Midland Road,Leytonstone High Road,Wanstead Park,Woodgrange Park,@4 Barking,Barking Riverside"]},
{id:"liberty",label:"Liberty (Overground)",color:"#6D6E71",paths:["@6 Romford,Emerson Park,Upminster"]}
];
