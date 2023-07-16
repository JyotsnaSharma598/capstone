export const rulesMd = `
  Cyber Attack is a game of attacker vs. defender in the cyber world.  It can be played by 2 - 6 players. The attackers goal is to infiltrate the defenders organization and to gain access to it’s data and then launch an attack.  The defenders goal is to prevent the attack from happening and if it does happen to mitigate it.  Once the setup is complete the game is played in two distinct “Acts”.  Act 1 is “Standard Operating Procedures”.  The attackers are trying to launch their attack while the defenders are working to detect and defend against it.  If the attackers are successful and an attack takes place then the game moves to Act 2, the attack itself.  Act 2 is after the malicious code has been launched, and if the defense can mitigate and recover or if they succumb to the demands of the attacker or close shop.

  ## Setup:

  1. Players sides
  - Cyber Attack is an asymmetrical game, meaning that not every player who plays has the same goal as other players.  Each player must decide to be an attacker or defender.
  - If there’s an even number of players divide into 2 even teams and choose a persona, if there’s an odd number of players the defenders side has the extra p.

  2. Board setup
  - Unfold the board and place the 3D resin blinders onto the board in their designated position.  The game starts where both attacker and defender do not know much about the other.  These may be removed throughout game play
  - Place a peg in the 1 position in the time track.
  - For the number of attacker players place that number of attack tokens on the “Attacker Start” spot on the board
  - For the number of defender players place that number of attack tokens on the “Defender Start” spot on the board
  - Place 2 blue shields on each of the defenders infrastructure resources:
    - Data Servers
    - Workstations
    - Printers
  - Place 1 blue shield on each of the connecting lines in the defender area
    - Line between Internet and web server
    - Line between Internet and email server
    - Line between Internet and workstations
    - Line between printer and workstations
    - Line between web server and workstations
    - Line between web sever and data server
    - Line between web server and email server

  3. Choosing personas - There are 6 double sided persona cards, 3 red attacker persona cards and 3 blue defender cards.  Each player decides on one card and one side to play.  For example Serge and Jyostna are one the same card, therefore there will not be a game where both the Serge and Jyostna persona’s are playing at the same time. It has to be one or the other.
  - Attacker personas:
    - Serge the professional cyber criminal (Same card as Jyotsna)

      Serge is the face of a cyber crime syndicate.  His goal is to gain a foothold into the organization, run ransomware, and get a payout from the organization. He is patient and well funded.  His tools are sophisticated and he is an expert at hiding his presence until he strikes. Serge is strong in all aspects of an attack, and rarely leaves anything to chance, He’s also the target that defenders are searching for the most.

    - Jyotsna the “script kiddie” (Same card at Serge)

      Jyostna is a young computer hacker.  She loves breaking into systems and the power she feels when she takes control of a system.  the thing is, she doesn’t really know HOW to do it. She steels code and runs it but when it comes to nuances she is just guessing.  Her attacks are unpredictable both what they are and how the work. Jyostna gets a penalty for reconnaissance.  She also has to pass a check to see if her action can take place, if it does though, watch out.

    - Diamond the insider threat (Same card as CB)

      Diamond has been in the organization a long time as a middle manager of finance. Frustrated with where the company is going and her stagnant position, she’s ready to take what is hers.  She’s interested in getting data and being able to sell it to the highest bidder.  She gets bonuses to reconnaissance and lateral movement, but doesn’t know all the IT controls so gets penalties for secrecy and payload deployment.

    - CB the researcher (Same card as Diamond)

      CB is a curious individual.  He’s not interested in hurting anyone or being malicious.  His interest lies in what can he do to that he shouldn’t, and how well his methods work, and how far can he go.  The more he infiltrates the more he wants to find out.  CB get’s bonuses in secrecy and lateral movement, while he doesn’t pay much attention to his targets and his code is always a work in progress he has penalties for reconnaissance and payload deployment.

    - Jonathan the nation state actor (Same card as Cecy)

      Jonathan is enforcer of an enemy nation’s cyber security program.  Unlike other attackers his goal is to just get and stay present.  He’s interested in getting a secret foothold, and keeping it persistent.  He wins when he’s fooled the defenders into thinking that there’s no attack at all.  With near unlimited resources at his disposal Jonathan can bend the game to his advantage in almost every possible way.   He gets bonuses in all attributes. Jonathan wins the game by deploying malicious code by round 7 of ACT 1, and lasting all 15 rounds of ACT 1 without being detected

    - Cecilia the Hactivist (Same card as Jonathan)

      Cecilia’s passion for social justice is only matched by her brilliance in front of a screen and keyboard.  She’s ready to enact her own agenda against the organization and show the rest of the world what she already knows.  How the real threat is the company she’s about to attack.  Cecilia get’s bonuses in reconnaissance lateral movement.  Staying silent and being untested were never high on her list of priorities though so she gets penalties for secrecy and payload deployment.  Her goal is also to embarrass the company so if her attack is successfully launched, she wins.


  - Defense Personas:
    - Jeff the IT director (Same card as Sohni)

      Jeff is a veteran when it comes to Information Technology.  He knows servers, networking and workstations. He balances the users expectations, uptime, and security. He is great at what he does, though he’s always running form one fire to the next, one project to the next.  Jeff is comfortable in all attributes, but being stretched all over, he’s never able to slow down and really look at anything unless the unthinkable happens.

    - Sohni the data analyst (Same card as Jeff)

      Sohni loves spreadsheets.  Pouring over data to find patterns and find where the organization can find ways to run better and more efficient.  Not very many anomalies get by her when it comes to corporate data.  What Sohni is not focused on is how that data lives in the organization. She gets bonuses to forensics and detection, but when it comes to prevention and remediation she gets penalized.

    - Grace the managed security parter manager (Same card as Surya)

      Grace is the manger of the partner company that the organization has hired to watch out for cyber security events.  Her team always has eyes on the infrastructure and how data is moving around the system.  The thing is, Grace also has other customers so sometimes she and her team might be responding to another event.  Grace gets bonuses for detection and remediation, but due to being a partner and not a company employee she gets penalties for prevention and forensics

    - Surya the HR/Finance Director (Same card as Grace)

      Surya knows the pulse of the company and all the laws that the organization needs to follow.  He is responsible for the resources of the company and how the company operates on a daily basis.  Putting in standards, and standard operating policies and procedures is what Surya lives for, and if someone or something doesn’t follow procedures he’s going to correct it. Surya gets bonuses for prevention and remediation but gets penalties for detection and forensics.

    - Elsa the CEO (Same card as Naphi)

      Elsa is the leader,  she’s not a technical person and not in the weeds.  She’s out in front and looking for ways to grow the organization while at the same time protecting it. She doesn’t know a much about cyber security, just that it’s important for risk mitigation. Her greatest skill is marshaling resources when needed.  Elsa get’s penalties in all attributes at the beginning, however if a foothold by the attackers is detected, she now gets bonuses to all attributes.

    - Naphi the hobbyist (Same card as Elsa)

      Naphi is in Quality Control, but if you ask him, he’s a computer geek.  He’s that co-worker that goes home and builds his own computer, reads the articles on the bleeding edge of technology. It’s just that he never gets to far into something before a new shinny object catches his eyes.   He’s always poking around on the system much to the frustration of IT.  But where others see boring, Naphi sees interest.  He gets bonuses to all attributes at the beginning, but because he doesn’t quite know the depth of security and can sometimes get in the way of IT, if a foothold by the attackers is detected he now gets penalties for all attributes.

  4. Character setup
  - When players are choosing persona’s they should keep it a secret who they choose form the opposing player or team.  This may be discovered though game play, however at the start of the game both attacker and defender do not know who they are up against.
  - Once persona’s are decided upon each player gets to put skill points into their persona to show what they are experienced in.  Each player has 40 skill points to spread across 4 attributes.  They can invest from 5 -15.
    - Attackers attributes:
      - Reconnaissance - researching the defender to know who’s who, how their company operates, the assets they have etc.  Knowledge.
      - Secrecy - this is how stealthy the attacker is,  the more points here the harder it is for the defenders to detect you
      - Code deployment - this is how effective you are at getting your program into the target company.
      - Lateral movement - this is how easily you can move across the target and spread the reach of your code and knowledge of the company
    - Defenders attributes
      - Prevention - This attribute prevents the attackers from getting their code into your organization
      - Detection - Putting points in this attribute allows a better chance of finding where the attacker is targeting and if there is a breach
      - Forensics - Boosting this attribute allows you to look at your data and what’s happened.  Important to have when trying to remediate a successful attack
      - Recovery - If a cyber event occurs do you have a good backup and plan to get your data and infrastructure back on line.
  - Once the baseline for skills is complete put the persona card in the persona’s area on the board.

  5. Deck setup
  - There are 4 decks in Cyber attack.  Shuffle each deck of cards and place them face down next to the board.  It’s suggested that the attack deck be close to the attacker side, and the defender deck be close to the defending side.
    - The event deck
      - After each turn sequence an event card is pulled and read out loud.  There will be a description of an event that occurs with possible modifications to attributes, on either side, as well as possible changes to the board.
      - Once read resolve all changes and place the card face up next to the event desk.  Any player may look back though events to look at what occurred
    - The attacker deck
      - During game play the attacking team may instructed to pick up attack cards.
      - Sometimes these are read out loud other times the attackers can read them secretly and depending on the card play them, or hold onto them.
      - If they decide to hold onto a card they place it on one of the 6 spaces labeled “attacker cards”.  These cards are considered in play, meaning that they have an effect on the game.
      - Sometimes attacker cards are face down, sometimes face up.  Regardless of if they are face down or up they are in play
      - There can only be a maximum of 6 attacker cards in play at one time.
        - If there is an open in play space the drawn card must be put in play
        - If every space labeled attacker cards has a card on it, and the attackers have another card to put into play, they must choose and replace one of the cards in play with the new card.
    - The defender deck
      - During game play the defending team may instructed to pick up defender cards.
      - Sometimes these are read out loud other times the defenders can read them secretly and depending on the card play them, or hold onto them.
      - If they decide to hold onto a card they place it on one of the 6 spaces labeled “defender cards”.  These cards are considered in play, meaning that they have an effect on the game.
      - Sometimes defender cards are face down, sometimes face up.  Regardless of if they are face down or up they are in play
      - There can only be a maximum of 6 defender cards in play at one time.
        - If there is an open in play space the drawn card must be put in play
        - If every space labeled defender cards has a card on it, and the defenders have another card to put into play, they must choose and replace one of the cards in play with the new card.
    - The cyber incident event deck
      - This deck is only used if the attackers successfully launch their attack (ACT 2).
      - It is read out loud after each turn in the cyber incident portion of the board.
      - Once read resolve all changes and place the card face up next to the event desk.  Any player may look back though events to look at what occurred

  6. Setup is now complete, Time to play CYBER ATTACK


  ## Game Play

  ### Act 1
  - The first turn
    - The Attackers and Defenders draws the first card on their respective decks reads it makes any adjustments and places it in play
    - They then draw the next two cards on their deck and places one in the in play area and puts the non selected one on the bottom of the defender deck
    - Draw an event card, and follow those instructions.

  - Subsequent turns
    - Defense Phase
      - The Defender moves their persona piece to an area of attention for that round.
      - The defenders goal is to strengthen their defenses, or gain insight as to how things are going.
      - Depending on the persona being played and the cards on the board different things can happen
      - Once all moves have been made signal to the attackers the turn is done
      - If any card that is in play’s action will be use put it in the “action” part of the board.
    - Attack Phase
      - The attacker moves their persona piece to an area of attention for that round.
      - The attackers goal is to infiltrate the defenders organization.
      - Depending on the persona being played and the cards on the board different things can happen
      - Once all moves have been made signal to the attackers the turn is done
      - If any card that is in play’s action will be use put it in the “action” part of the board.
    - Event Phase
      - Draw the next card on the event deck and follow the instructions on it.
      - Once read place it face up in the “History” section of the board
    - Action Phase
      - Roll the two dice
      - Resolve all modifiers of attributes for both defenders and attackers
      - Resolve any action items from the event card
      - Take the card on the “action” part of the board in order from top to bottom, read it and follow the directions.
      - Move the peg up one on the time track
      - If the time track peg is at 15 or a cyber attack has been launched then move the time track peg to the cyber event time track and move to “ACT 2”
      - If not moving to “ACT 2” start a new play cycle

  ### Act 2
    - Attack Phase
      - The Attacker places their persona pieces into their area of focus
      - If any card that is in play’s action will be use put it in the “action” part of the board.
      - Once done the attacker signals to the defenders their phase is done
    - Defend Phase
      - The Defender places their persona pieces into their area of focus
      - If any card that is in play’s action will be use put it in the “action” part of the board.
      - Once done the defender signals to the defenders their phase is done
    - Event Phase
      - Draw the next card on the event deck and follow the instructions on it.
      - Once read place it face up in the “History” section of the board
    - Cyber Event Phase
      - Draw the next card on the cyber event deck and follow the instructions on it.
      - Once read place it face up in the “History” section of the board
    - Action Phase
      - Roll the two dice
      - Resolve all modifiers of attributes for both defenders and attackers
      - Resolve any action items from the event card
      - Resolve any action items from the cyber event card
      - Take the card on the “action” part of the board in order from top to bottom, read it and follow the directions.
      - Move the peg up one on the cyber event time track
      - If the Attack is mitigated fully the defender wins
      - If the Defender has no more options the attacker wins

  ## Congratulations on completing the game “Cyber Attack”.
`;
