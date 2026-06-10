import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Player, GameLogEntry } from '../types';
import { CARD_TEMPLATES } from '../data';
import { translations, Language } from '../translations';
import { getGlassyCardStyle } from '../utils/glass';
import CharacterBgEffect from './CharacterBgEffect';
import { 
  Users, 
  Sparkles, 
  ShieldAlert, 
  Info, 
  Play, 
  RotateCcw, 
  ArrowRight,
  TrendingUp,
  Inbox,
  Tv,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface GameEngineProps {
  lang: Language;
}

const AVATARS = ['👶', '👧', '👦', '🦸‍♀️', '🦁', '🦉', '🦊', '🐼'];

// Interactive dialogue quotes representing the dynamic educational personalities of our simulated opponents!
const getAIQuote = (aiName: string, cardType: string, cardChar: string, lang: Language) => {
  if (lang === 'ar') {
    switch (cardChar) {
      case 'domi':
        return `🦸‍♂️ ${aiName}: دومي البطل يمنحنا شحنة حديدية وقوة تبلغ +3! خلايا دمنا ممتازة ونشطة!`;
      case 'jeebi':
        return `💧 ${aiName}: تفعيل خلايا الدم بإنزيم G6PD الرائع! +2 طاقة لمنع أي تحلل للدم!`;
      case 'huma':
        return `🛡️ ${aiName}: لقد قمت ببناء درع حمى المتين! لن تضرنا المواد المؤكسدة کالفول الأخضر مستقبلاً!`;
      case 'qasbo':
        return `🍯 ${aiName}: شربت عسل قصبو المضاد للأكسدة! كارت المنقذ يبطل فاعلية الخطر ويعيد حيويتنا!`;
      case 'folo':
        return `🌱 ${aiName}: احذروا! لعبت فولو (الفول الأخضر) الممنوع! سيسبب تكسراً دموياً مباشراً إن لم نحذر!`;
      case 'soyo':
        return `🍶 ${aiName}: انتبهوا من الصويا الخفية! كارت سويو يخفض طاقة الدم بمقدار نقطة واحدة!`;
      case 'dawao':
        return `💊 ${aiName}: لا للمسكنات المشبوهة والعشوائية دون موافقة الطبيب! أطلقت كارت دواء غير الآمن!`;
      case 'nifto':
        return `💨 ${aiName}: خطر سام حاد! كرات النفتالين نفتو تضر بالدم للغاية وتخفض نقاطنا بـ -3!`;
      default:
        return `🧠 ${aiName}: سأتخذ حركة وقائية ذكية لحماية صحة أبطالنا الصغار!`;
    }
  } else if (lang === 'fr') {
    switch (cardChar) {
      case 'domi':
        return `🦸‍♂️ ${aiName}: Domi le Héros nous booste de +3 ! Nos globules rouges sont en pleine forme !`;
      case 'jeebi':
        return `💧 ${aiName}: Activation de l'enzyme G6PD de Jeebi (+2) ! Prévention de l'hémolyse activée !`;
      case 'huma':
        return `🛡️ ${aiName}: J'ai érigé le Bouclier Huma ! Les fèves ou le soja ne pourront plus nous atteindre !`;
      case 'qasbo':
        return `🍯 ${aiName}: Place au miel de canne de secours de Qasbo ! Restauration et neutralisation immédiates !`;
      case 'folo':
        return `🌱 ${aiName}: Attention ! Je joue la fève Folo, déclencheur de crise d'anémie !`;
      case 'soyo':
        return `🍶 ${aiName}: Soyez vigilants face aux additifs de Soyo ! -1 point de santé sanguine !`;
      case 'dawao':
        return `💊 ${aiName}: Pas d'automédication ! Je lance la pilule Dawao à risque !`;
      case 'nifto':
        return `💨 ${aiName}: Danger extrême ! Les vapeurs de naphtaline Nifto réduisent notre score de -3 !`;
      default:
        return `🧠 ${aiName}: Je prépare un coup tactique pour sensibiliser et protéger nos globules !`;
    }
  } else {
    switch (cardChar) {
      case 'domi':
        return `🦸‍♂️ ${aiName}: Domi Hero boosts our red blood cells with +3! Stay strong and active!`;
      case 'jeebi':
        return `💧 ${aiName}: Unleashing vital Jeebi G6PD enzyme (+2 Pts) to safeguard our blood stability!`;
      case 'huma':
        return `🛡️ ${aiName}: Erected my Huma shield! All incoming oxidative stressors are now fully blocked!`;
      case 'qasbo':
        return `🍯 ${aiName}: Powering Qasbo sugar cane honey! Danger neutralized, energy has been restored!`;
      case 'folo':
        return `🌱 ${aiName}: Look out! Played forbidden Folo fava bean, triggering direct red cell breakdown!`;
      case 'soyo':
        return `🍶 ${aiName}: Warning! Hidden Soyo soy components lower our safety margins by 1 point!`;
      case 'dawao':
        return `💊 ${aiName}: Unsafe medication! Playing Dawao pill. Always check with safe healthcare guide!`;
      case 'nifto':
        return `💨 ${aiName}: Acute Hazard! Nifto Naphthalene balls zap -3 health points instantly!`;
      default:
        return `🧠 ${aiName}: Preparing a smart preventive tactic to safeguard our healthy champions!`;
    }
  }
};

const getPlayerTrait = (id: string, lang: Language) => {
  if (id === 'human') {
    return lang === 'ar' ? 'البطل المقاوم الواعي 🌟' : lang === 'fr' ? 'Héros de vigilance 🌟' : 'Vigilant Health Hero 🌟';
  }
  const traitMapAr: Record<string, string> = {
    'ai_0': 'خبير الدروع 🛡️ (الحامي الأول)',
    'ai_1': 'محب الإنزيمات 🧬 (حارس دومي)',
    'ai_2': 'المخطط الوقائي 🧠 (المدرب الذكي)',
    'ai_3': 'البطل النشيط ⚡ (سفير التوعية)',
    'ai_4': 'روبوت المعرفة 🤖 (مكتشف الممنوعات)'
  };
  const traitMapEn: Record<string, string> = {
    'ai_0': 'Shield Master 🛡️ (Primary Guard)',
    'ai_1': 'Enzyme Seeker 🧬 (Cell Guardian)',
    'ai_2': 'Safety Planner 🧠 (Tactical Head)',
    'ai_3': 'Active Leader ⚡ (Wellness Envoy)',
    'ai_4': 'Knowledge Bot 🤖 (Triggers Finder)'
  };
  const traitMapFr: Record<string, string> = {
    'ai_0': 'Maître du Bouclier 🛡️',
    'ai_1': 'Gardien Enzyme 🧬',
    'ai_2': 'Planificateur Safe 🧠',
    'ai_3': 'Actif Ambassadeur ⚡',
    'ai_4': 'Robot Médical 🤖'
  };

  const map = lang === 'ar' ? traitMapAr : lang === 'fr' ? traitMapFr : traitMapEn;
  return map[id] || (lang === 'ar' ? 'منافس توعوي 🎯' : 'Awareness Competitor 🎯');
};

export default function GameEngine({ lang }: GameEngineProps) {
  const t = translations[lang];

  // Game configuration states
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [aiCount, setAiCount] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [playerAvatar, setPlayerAvatar] = useState('🦸‍♀️');

  // Core gameplay states
  const [players, setPlayers] = useState<Player[]>([]);
  const [deck, setDeck] = useState<Card[]>([]);
  const [discardPile, setDiscardPile] = useState<Card[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [gameLogs, setGameLogs] = useState<GameLogEntry[]>([]);
  const [winner, setWinner] = useState<Player | null>(null);
  
  // Dynamic Speech Bubble State for AI Dialogue chatter
  const [speechBubble, setSpeechBubble] = useState<{
    playerId: string;
    text: string;
  } | null>(null);
  
  // Interaction phase state
  // 'draw' -> player needs to draw a card
  // 'play' -> player needs to select and play a card
  // 'resolve_target' -> player played a danger card and needs to select which opponent to target
  // 'ai_thinking' -> AI turn process
  const [gamePhase, setGamePhase] = useState<'setup' | 'draw' | 'play' | 'resolve_target' | 'ai_thinking' | 'ended'>('setup');
  const [selectedCardToPlay, setSelectedCardToPlay] = useState<Card | null>(null);

  // Pop-up Notification State for card effects
  const [cardEffectAlert, setCardEffectAlert] = useState<{
    text: string;
    emoji: string;
    type: 'success' | 'danger' | 'shield' | 'neutral';
    visible: boolean;
  }>({ text: '', emoji: '', type: 'neutral', visible: false });

  // Add card templates duplicated to create a substantial deck
  const generateNewDeck = (): Card[] => {
    let result: Card[] = [];
    // We want a robust deck of about 48 cards
    CARD_TEMPLATES.forEach((template) => {
      let duplicates = 6; // default duplication count
      if (template.character === 'domi') duplicates = 4; // rare card
      if (template.character === 'nifto') duplicates = 4; // severe danger
      if (template.character === 'huma') duplicates = 6;  // shields
      if (template.character === 'qasbo') duplicates = 6; // rescues

      for (let i = 0; i < duplicates; i++) {
        result.push({
          ...template,
          id: `${template.id}_deck_${i}_${Math.random().toString(36).substr(2, 4)}`
        });
      }
    });

    // Shuffle the deck (Fisher-Yates)
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const addLog = (message: string, type: GameLogEntry['type'] = 'info') => {
    const timestamp = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setGameLogs(prev => [
      { id: Math.random().toString(), message, timestamp, type },
      ...prev.slice(0, 49) // Keep last 50 logs
    ]);
  };

  const showAlert = (text: string, emoji: string, type: typeof cardEffectAlert['type']) => {
    setCardEffectAlert({ text, emoji, type, visible: true });
    setTimeout(() => {
      setCardEffectAlert(prev => ({ ...prev, visible: false }));
    }, 2800);
  };

  // Setup and Start Game
  const startNewGame = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const finalName = playerName.trim() || (lang === 'ar' ? 'البطل الصغير' : 'Little Champ');
    const newDeck = generateNewDeck();

    // Deal 5 cards from shuffled deck to each player, initialized with 5 points
    const createdPlayers: Player[] = [
      {
        id: 'human',
        name: finalName,
        isAI: false,
        score: 5,
        hand: newDeck.splice(0, 5),
        hasShield: false,
        avatar: playerAvatar
      }
    ];

    // Create AI players (expanded to 5 active simulation competitors)
    const aiNamesAr = [
      'جيبي الذكي', 
      'دومي المساعد', 
      'مستشار الوقاية', 
      'سفير التوعية', 
      'جندي المعرفة'
    ];
    const aiNamesEn = [
      'Wise Jeebi', 
      'Defending Domi', 
      'Guard Advisor', 
      'Awareness Envoy', 
      'Knowledge Trooper'
    ];
    const aiAvatars = ['🦉', '🐼', '🦊', '🦁', '🤖'];

    for (let i = 0; i < aiCount; i++) {
      createdPlayers.push({
        id: `ai_${i}`,
        name: lang === 'ar' ? aiNamesAr[i] : aiNamesEn[i],
        isAI: true,
        score: 5,
        hand: newDeck.splice(0, 5),
        hasShield: false,
        avatar: aiAvatars[i]
      });
    }

    setDeck(newDeck);
    setPlayers(createdPlayers);
    setDiscardPile([]);
    setCurrentPlayerIdx(0);
    setWinner(null);
    setGameLogs([]);
    setGameStarted(true);
    setGamePhase('draw');

    const welcomeMsg = lang === 'ar' 
      ? `تم بدء اللعب! تم توزيع 5 بطاقات لكل بطل وبدء اللعبة بـ 5 نقاط ونقاط الفوز هدفها 15.`
      : `Game started! Dealt 5 cards and 5 initial health points to all adventurers. Target: 15 Pts.`;
    addLog(welcomeMsg, 'success');
  };

  // Human player draws a card
  const handlePlayerDraw = () => {
    if (gamePhase !== 'draw' || players[currentPlayerIdx].isAI) return;
    
    if (deck.length === 0) {
      // Re-shuffle empty deck from discard pile
      if (discardPile.length > 0) {
        const resetDeck = [...discardPile];
        for (let i = resetDeck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [resetDeck[i], resetDeck[j]] = [resetDeck[j], resetDeck[i]];
        }
        setDeck(resetDeck);
        setDiscardPile([]);
        addLog(lang === 'ar' ? 'تمت إعادة خلط كومة الأوراق مجدداً لامتلاء السحب.' : 'Reshuffled empty deck from discard pile.', 'info');
      } else {
        addLog(lang === 'ar' ? 'انتهت بطاقات السحب والقرارات تتجه للنقاط النهائية!' : 'No cards remaining in the entire deck!', 'warning');
        determineWinnerByHighPoints();
        return;
      }
    }

    const currentPtr = players[currentPlayerIdx];
    const updatedPlayers = [...players];
    const topCard = deck[0];
    const remainingDeck = deck.slice(1);

    updatedPlayers[currentPlayerIdx] = {
      ...currentPtr,
      hand: [...currentPtr.hand, topCard]
    };

    setDeck(remainingDeck);
    setPlayers(updatedPlayers);
    setGamePhase('play');

    const dCardName = t[topCard.nameKey];
    addLog(lang === 'ar' ? `لقد سحبت كارت جديد: (${dCardName})` : `You drew a new card: ${dCardName}`, 'info');
  };

  // Determine winner if no cards or game ends
  const determineWinnerByHighPoints = () => {
    let topPlayer = players[0];
    players.forEach(p => {
      if (p.score > topPlayer.score) topPlayer = p;
    });
    setWinner(topPlayer);
    setGamePhase('ended');
    const msg = lang === 'ar' 
      ? `🏆 انتصر اللاعب ${topPlayer.name} برصيد نقاط قدره ${topPlayer.score} نقطة!`
      : `🏆 Player ${topPlayer.name} wins by highest score margin (${topPlayer.score} Pts)!`;
    addLog(msg, 'success');
  };

  // Evaluate single played card
  const executeCardPlay = (cardId: string, card: Card, targetPlayerId?: string) => {
    const updatedPlayers = [...players];
    const playOwner = players[currentPlayerIdx];

    // Remove card from player hand
    const nextHand = playOwner.hand.filter(c => c.id !== cardId);
    updatedPlayers[currentPlayerIdx] = {
      ...playOwner,
      hand: nextHand
    };

    // Add card to discard pile
    setDiscardPile(prev => [card, ...prev]);

    const cardNameStr = t[card.nameKey];

    // Card playing logical routes
    if (card.type === 'enzyme' || card.type === 'hero') {
      // SELF ACTION: Raises own points
      const newScore = playOwner.score + card.points;
      updatedPlayers[currentPlayerIdx].score = newScore;
      setPlayers(updatedPlayers);

      const winEmoji = card.type === 'hero' ? '🦸‍♂️' : '💧';
      const pointsGainText = lang === 'ar' 
        ? `${playOwner.name} لعب كارت ${cardNameStr} وحصل على +${card.points} نقاط!` 
        : `${playOwner.name} played ${cardNameStr} and gained +${card.points} Pts!`;
      
      addLog(pointsGainText, 'success');
      showAlert(`+${card.points} ${lang === 'ar' ? 'نقاط' : 'Pts'}`, winEmoji, 'success');

      // Check win threshold
      if (newScore >= 15) {
        setWinner(playOwner);
        setGamePhase('ended');
        return;
      }
      
      // Advance turn
      advanceTurnSeq(updatedPlayers);
    } 
    else if (card.type === 'protection') {
      // SELF ACTION: Set Shield Active
      updatedPlayers[currentPlayerIdx].hasShield = true;
      setPlayers(updatedPlayers);

      const shieldLogStr = lang === 'ar'
        ? `${playOwner.name} قام بتفعيل درع الحماية المتين (حمى) 🛡️!`
        : `${playOwner.name} activated strong Huma protection shield 🛡️!`;
      
      addLog(shieldLogStr, 'shield');
      showAlert(lang === 'ar' ? 'تفعيل درع حِمى' : 'Shield Activated', '🛡️', 'shield');
      
      // Advance turn
      advanceTurnSeq(updatedPlayers);
    } 
    else if (card.type === 'rescue') {
      // Rescue can be played directly to gain a safe point and wipe discard danger
      const newScore = Math.max(0, playOwner.score + 1);
      updatedPlayers[currentPlayerIdx].score = newScore;
      setPlayers(updatedPlayers);

      const rescueLogStr = lang === 'ar'
        ? `${playOwner.name} لعب عسل قصبو المنقذ وحصل على +1 لإعادة العافية!`
        : `${playOwner.name} played Qasbo rescue honey and restored +1 Pt!`;

      addLog(rescueLogStr, 'success');
      showAlert(lang === 'ar' ? 'عافية وإنقاذ قصبو' : 'Qasbo Honey', '🍯', 'success');

      advanceTurnSeq(updatedPlayers);
    }
    else if (card.type === 'danger') {
      // DANGER ACTION: Selected opponent takes damage
      const targetId = targetPlayerId || players.find(p => p.id !== playOwner.id)?.id;
      const targetPlayerIdx = updatedPlayers.findIndex(p => p.id === targetId);

      if (targetPlayerIdx !== -1) {
        const targetPlayer = updatedPlayers[targetPlayerIdx];
        
        // 1. Check if target holds Huma shield
        if (targetPlayer.hasShield) {
          // Shield absorbs it!
          updatedPlayers[targetPlayerIdx].hasShield = false;
          setPlayers(updatedPlayers);

          const shieldAbsorbStr = lang === 'ar'
            ? `🛡️ بطل دفاع! تم إبطال الخطر ${cardNameStr} الموجه ضد ${targetPlayer.name} بفضل درع حِمى المتين!`
            : `🛡️ Shield block! Danger card ${cardNameStr} aimed at ${targetPlayer.name} was fully absorbed by Huma shield!`;

          addLog(shieldAbsorbStr, 'info');
          showAlert(lang === 'ar' ? 'تم صد الهجوم بالدرع!' : 'Attack Blocked!', '🛡️', 'neutral');
        } 
        // 2. Check if target holds Qasbo Rescue in hand (Auto Counter rescue!)
        else {
          const qasboCardIdx = targetPlayer.hand.findIndex(c => c.character === 'qasbo');
          if (qasboCardIdx !== -1) {
            // Target discards Qasbo to fully neutralize
            const nextTargetHand = targetPlayer.hand.filter((_, i) => i !== qasboCardIdx);
            updatedPlayers[targetPlayerIdx] = {
              ...targetPlayer,
              hand: nextTargetHand
            };
            setPlayers(updatedPlayers);

            const qasboCounterStr = lang === 'ar'
              ? `🍯 إنقاذ فوري! استهلك ${targetPlayer.name} كارت قصبو المنقذ من يده لإلغاء تأثير خطر ${cardNameStr} بالكامل!`
              : `🍯 Instant rescue! ${targetPlayer.name} used Qasbo honeycomb from hand to fully neutralize the dangerous ${cardNameStr}!`;

            addLog(qasboCounterStr, 'success');
            showAlert(lang === 'ar' ? 'قصبو يحميني!' : 'Saved by Qasbo!', '🍯', 'success');
          } 
          // 3. Suffer normal pain points reduction
          else {
            const damageApplied = card.points; // Neg number, like -1 or -3
            const priorScore = targetPlayer.score;
            // Never drop below 0 health points standard
            const targetNewScore = Math.max(0, priorScore + damageApplied);
            updatedPlayers[targetPlayerIdx].score = targetNewScore;
            setPlayers(updatedPlayers);

            const dmgStr = lang === 'ar'
              ? `🚨 تضرر! أصيب ${targetPlayer.name} بعبء ${cardNameStr} وانخفض معدل دمه بـ ${damageApplied} نقاط!`
              : `🚨 Impact! ${targetPlayer.name} suffered a points drop of ${damageApplied} from ${cardNameStr}!`;

            addLog(dmgStr, 'danger');
            showAlert(`${damageApplied} ${lang === 'ar' ? 'نقاط' : 'Pts'}`, card.emoji, 'danger');
          }
        }
      }

      setGamePhase('play'); // reset
      setSelectedCardToPlay(null);
      advanceTurnSeq(updatedPlayers);
    }
  };

  // Progression turns sequence
  const advanceTurnSeq = (currentPlayersState: Player[]) => {
    // Check if the game has ended and we have a winner
    const potentialWinner = currentPlayersState.find(p => p.score >= 15);
    if (potentialWinner) {
      setWinner(potentialWinner);
      setGamePhase('ended');
      return;
    }

    const nextIdx = (currentPlayerIdx + 1) % currentPlayersState.length;
    setCurrentPlayerIdx(nextIdx);

    const nextPlayerObj = currentPlayersState[nextIdx];
    if (nextPlayerObj.isAI) {
      setGamePhase('ai_thinking');
    } else {
      setGamePhase('draw');
    }
  };

  // Trigger AI game decisions
  useEffect(() => {
    if (gamePhase !== 'ai_thinking' || winner) return;

    const timer = setTimeout(() => {
      executeAiTurn();
    }, 1250);

    return () => clearTimeout(timer);
  }, [gamePhase, currentPlayerIdx]);

  const executeAiTurn = () => {
    const aiPlayer = players[currentPlayerIdx];
    const updatedPlayers = [...players];
    let workingDeck = [...deck];

    // AI Draws card first automatically
    if (workingDeck.length === 0) {
      if (discardPile.length > 0) {
        workingDeck = [...discardPile];
        for (let i = workingDeck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [workingDeck[i], workingDeck[j]] = [workingDeck[j], workingDeck[i]];
        }
        setDiscardPile([]);
      } else {
        determineWinnerByHighPoints();
        return;
      }
    }

    const topCard = workingDeck[0];
    const remainingDeck = workingDeck.slice(1);
    
    // Add to AI hand
    const freshAiHand = [...aiPlayer.hand, topCard];
    
    // Updated local AI object
    updatedPlayers[currentPlayerIdx] = {
      ...aiPlayer,
      hand: freshAiHand
    };
    
    setDeck(remainingDeck);
    
    // AI Decision Rules Process
    // AI analyzes its hand to pick the most optimal card to play
    let chosenCardIdx = 0;
    
    // Rule a: AI prefers to play high points enzymes (Domi +3, Jeebi +2) to win if close to 15
    const domiIdx = freshAiHand.findIndex(c => c.character === 'domi');
    const jeebiIdx = freshAiHand.findIndex(c => c.character === 'jeebi');
    
    if (domiIdx !== -1) {
      chosenCardIdx = domiIdx;
    } else if (jeebiIdx !== -1) {
      chosenCardIdx = jeebiIdx;
    } 
    // Rule b: AI plays protection (Huma) if it doesn't already have one
    else if (!aiPlayer.hasShield && freshAiHand.findIndex(c => c.character === 'huma') !== -1) {
      chosenCardIdx = freshAiHand.findIndex(c => c.character === 'huma');
    } 
    // Rule c: If opponent has high points, play danger cards (Nifto -3 first, then normal danger)
    else {
      const niftoIdx = freshAiHand.findIndex(c => c.character === 'nifto');
      const otherDangerIdx = freshAiHand.findIndex(c => c.type === 'danger');
      const qasboIdx = freshAiHand.findIndex(c => c.character === 'qasbo');

      if (niftoIdx !== -1) {
        chosenCardIdx = niftoIdx;
      } else if (otherDangerIdx !== -1) {
        chosenCardIdx = otherDangerIdx;
      } else if (qasboIdx !== -1) {
        chosenCardIdx = qasboIdx; // Use rescue as points booster
      } else {
        // Fallback: simple random
        chosenCardIdx = Math.floor(Math.random() * freshAiHand.length);
      }
    }

    const cardPlayed = freshAiHand[chosenCardIdx];
    
    // Target Selection: AI targets player with highest points index
    let aiTargetId = 'human';
    let highestScore = -1;
    players.forEach(p => {
      if (p.id !== aiPlayer.id && p.score > highestScore) {
        highestScore = p.score;
        aiTargetId = p.id;
      }
    });

    const finalPlayersList = [...updatedPlayers];
    setPlayers(finalPlayersList);

    // Prompt log
    const aiLogPlay = lang === 'ar'
      ? `🤖 الخصم الآلي (${aiPlayer.name}) قام بسحب كارت ثم لعب: [${t[cardPlayed.nameKey]}]`
      : `🤖 Simulation Opponent (${aiPlayer.name}) drew a card, then played: [${t[cardPlayed.nameKey]}]`;
    addLog(aiLogPlay, 'info');

    // Trigger AI Educational speech / dialogue quote bubble
    const aiQuote = getAIQuote(aiPlayer.name, cardPlayed.type, cardPlayed.character, lang);
    setSpeechBubble({ playerId: aiPlayer.id, text: aiQuote });
    addLog(`💬 ${aiQuote}`, 'info');

    // Clear dialogue overlay after 4 seconds
    setTimeout(() => {
      setSpeechBubble(null);
    }, 4000);

    // Exec the card action on the target if it is danger
    setTimeout(() => {
      executeCardPlay(cardPlayed.id, cardPlayed, aiTargetId);
    }, 1000);
  };

  // Human player chooses card to play
  const handleHumanCardSelect = (card: Card) => {
    if (gamePhase !== 'play' || players[currentPlayerIdx].isAI) return;

    if (card.type === 'danger') {
      // Prompt targeting opponent phase if more than 1 opponent
      const potentialTargets = players.filter(p => !p.isAI || p.id !== 'human');
      if (potentialTargets.length > 1) {
        setSelectedCardToPlay(card);
        setGamePhase('resolve_target');
        addLog(lang === 'ar' 
          ? `اختر خصماً لتوجيه الكارت الهجومي (${t[card.nameKey]}) إليه:` 
          : `Choose which simulation opponent to target with ${t[card.nameKey]}:`, 'warning');
      } else {
        // Immediately execute play targeting the single opponent
        executeCardPlay(card.id, card, potentialTargets[0].id);
      }
    } else {
      // Positive or shield cards apply to self immediately
      executeCardPlay(card.id, card, 'human');
    }
  };

  const selectTargetResolve = (opponentId: string) => {
    if (gamePhase !== 'resolve_target' || !selectedCardToPlay) return;
    executeCardPlay(selectedCardToPlay.id, selectedCardToPlay, opponentId);
  };

  return (
    <section id="game-section" className="py-20 bg-transparent text-white px-4 relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1200px,transparent_1px)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Game Title Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-indigo-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-305 animate-spin" />
            <span>{lang === 'ar' ? 'فصل الترفيه واللعب التوعوي' : 'Learn & Play Interactive Section'}</span>
          </motion.div>

          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            {t.gameTitle}
          </h2>
          <p className="text-indigo-150 mt-2 max-w-2xl mx-auto text-base">
            {t.gameSubtitle}
          </p>
        </div>

        {/* SETUP VIEW: Interactive Form to configure Opponents */}
        {!gameStarted && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md text-white space-y-6"
          >
            <h3 className="text-2xl font-black text-center mb-6 text-white border-b border-white/15 pb-4">
              {t.setupGame}
            </h3>

            <form onSubmit={startNewGame} className="space-y-6">
              {/* Player Custom Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-indigo-200 block">
                  {lang === 'ar' ? '👤 اسم اللاعب الوقائي (طفلك أو البطل):' : '👤 Enter Little Hero Name:'}
                </label>
                <input
                  type="text"
                  maxLength={18}
                  placeholder={lang === 'ar' ? 'مثال: آدم البطل' : 'e.g. Hero Adam'}
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full bg-black/35 border border-white/10 focus:border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none text-base font-semibold transition animate-none"
                />
              </div>

              {/* Avatar Selection */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-indigo-200 block">
                  {lang === 'ar' ? '🎭 اختر شخصيتك الكرتونية المفضلة:' : '🎭 Choose Favorite Identity:'}
                </label>
                <div className="grid grid-cols-8 gap-2 bg-black/25 p-2.5 rounded-2xl border border-white/10">
                  {AVATARS.map((ic) => (
                    <button
                      key={ic}
                      type="button"
                      onClick={() => setPlayerAvatar(ic)}
                      className={`text-2xl py-2.5 rounded-xl text-center select-none cursor-pointer transition ${
                        playerAvatar === ic ? 'bg-white/20 border border-white/20 scale-110 shadow-lg' : 'hover:bg-white/5'
                      }`}
                    >
                      {ic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opponent AI Count Config */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-indigo-200 block">
                  {t.choosePlayersCount}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setAiCount(num as any)}
                      className={`py-3.5 rounded-xl font-extrabold flex flex-col items-center gap-1 transition cursor-pointer text-sm ${
                        aiCount === num 
                          ? 'bg-white text-indigo-950 shadow-xl border border-white/40 shadow-indigo-550/35' 
                          : 'bg-white/5 text-white/80 hover:text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <Users className="w-5 h-5" />
                      <span className="text-base">{num}</span>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-indigo-250 italic block leading-snug">
                  {lang === 'ar'
                    ? '💡 نصيحة: اختر 4 أو 5 منافسين لخوض محاكاة جماعية فائقة الحماس والتدريب الوقائي الأقوى!'
                    : '💡 Tip: Select 4 or 5 competitors to run a super high-tension multiplayer health-awareness simulator!'}
                </p>
              </div>

              {/* Submit / Start Game */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-lg tracking-tight hover:brightness-110 shadow-lg shadow-emerald-950/20 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{t.startGameBtn}</span>
              </button>
            </form>
          </motion.div>
        )}

        {/* ACTIVE GAME PLAYING MODULE BOARD */}
        {gameStarted && (
          <div className="space-y-6">
            
            {/* ALERT NOTIFICATION TOAST OVERLAY */}
            <AnimatePresence>
              {cardEffectAlert.visible && (
                <motion.div
                  initial={{ opacity: 0, y: -45, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                >
                  <div className={`px-6 py-4 rounded-full border-2 shadow-2xl flex items-center gap-3 backdrop-blur-md ${
                    cardEffectAlert.type === 'success' ? 'bg-emerald-950/90 text-emerald-250 border-emerald-500' :
                    cardEffectAlert.type === 'danger' ? 'bg-red-950/95 text-red-200 border-red-500 animate-bounce' :
                    cardEffectAlert.type === 'shield' ? 'bg-sky-950/90 text-sky-200 border-sky-400' : 'bg-slate-900/90 text-white border-slate-650'
                  }`}>
                    <span className="text-3xl filter drop-shadow">{cardEffectAlert.emoji}</span>
                    <span className="font-extrabold text-base tracking-wide whitespace-nowrap">{cardEffectAlert.text}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TOP BAR / THE HEALTH MONITORING STATUS VIEWPORT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              
              {/* Left/Middle-left Players Grid (AI elements + Human User info) */}
              {players.map((plr, i) => {
                const turnRing = currentPlayerIdx === i;
                const isHuman = plr.id === 'human';
                const isCritical = plr.score <= 3;

                return (
                  <motion.div
                    key={plr.id}
                    animate={turnRing ? { scale: [1, 1.03, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                    className={`rounded-2xl border p-4 flex flex-col justify-between relative transition-all duration-300 backdrop-blur-md shadow-lg ${
                      isCritical
                        ? 'bg-red-950/50 border-red-500/40 shadow-red-500/10'
                        : turnRing 
                          ? 'bg-white/25 border-indigo-400 shadow-indigo-500/5' 
                          : 'bg-white/10 border-white/10'
                    }`}
                  >
                    {/* Floating Speech Bubble Aspect */}
                    <AnimatePresence>
                      {speechBubble && speechBubble.playerId === plr.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.7, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.7 }}
                          className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 w-64 bg-slate-950/95 text-white text-xs p-3 rounded-2xl shadow-2xl border-2 border-indigo-400 z-50 pointer-events-none"
                        >
                          <div className="font-extrabold text-indigo-300 mb-1 flex items-center gap-1">
                            <span>{plr.name}</span>
                            <span className="animate-bounce">💬</span>
                          </div>
                          <p className="font-medium text-[11px] leading-relaxed text-slate-100">
                            {speechBubble.text}
                          </p>
                          {/* Triangle arrow pointing downwards */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-950" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active turn halo */}
                    {turnRing && (
                      <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-550 text-white font-sans font-extrabold text-[9px] uppercase tracking-wider animate-pulse shadow-md border border-indigo-400">
                        {lang === 'ar' ? 'يلعب الآن ⚡' : 'Playing Now ⚡'}
                      </span>
                    )}

                    {/* Critical health flame indicator */}
                    {isCritical && (
                      <span className="absolute -top-3.5 right-4 px-2 py-0.5 rounded-full bg-red-650 text-white font-sans font-extrabold text-[8px] uppercase tracking-wide animate-pulse border border-red-500 shadow-md">
                        {lang === 'ar' ? '⚠️ خطر' : '⚠️ Danger'}
                      </span>
                    )}

                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <div className="text-3xl relative">
                        {plr.avatar}
                        {plr.hasShield && (
                          <span className="absolute -bottom-1 -right-1 text-base bg-slate-900 rounded-full p-0.5 select-none animate-pulse">🛡️</span>
                        )}
                      </div>

                      <div className="overflow-hidden">
                        <h4 className="font-extrabold text-sm truncate text-white">
                          {plr.name}
                        </h4>
                        <span className="text-[9px] text-indigo-200 block font-medium leading-tight">
                          {getPlayerTrait(plr.id, lang)}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3">
                      <div>
                        <span className="text-[10px] uppercase text-indigo-200 block leading-tight font-bold">
                          {lang === 'ar' ? 'مجموع الدم Pts' : 'Blood Score'}
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className={`text-2xl font-black font-sans tracking-tight ${isCritical ? 'text-red-400 animate-pulse' : 'text-rose-300'}`}>
                            {plr.score}
                          </span>
                          <span className="text-[10px] text-white/60 font-medium">/ 15</span>
                        </div>
                      </div>

                      {/* Display hand size iconically */}
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-indigo-200 block leading-tight font-bold">
                          {lang === 'ar' ? 'البطاقات' : 'Cards Hand'}
                        </span>
                        <div className="flex gap-0.5 mt-1.5 justify-end">
                          {[...Array(plr.hand.length)].map((_, idx) => (
                            <div key={idx} className="w-1.5 h-3 bg-white/40 border border-white/20 rounded-xs"></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Progress Health mini BAR */}
                    <div className="w-full bg-black/35 h-2 rounded-full overflow-hidden mt-3 border border-white/5">
                      <div 
                        style={{ width: `${Math.min(100, (plr.score / 15) * 100)}%` }}
                        className={`h-full rounded-full transition-all duration-300 ${
                          plr.score >= 12 ? 'bg-emerald-400' : plr.score >= 6 ? 'bg-indigo-300' : 'bg-red-500 animate-pulse'
                        }`}
                      ></div>
                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* MAIN CENTRAL FIELD LAYOUT: DECK & LOG DISPLAY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                               {/* Pile and draw area (5 Cols) */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-indigo-200">
                    {lang === 'ar' ? '📚 طاولة الأوراق والسحب التفاعلية' : '📚 Draw Table & Pile View'}
                  </h4>
                </div>

                {/* VISUAL GAME PILES DISPLAY */}
                <div className="flex items-center justify-center gap-8 py-6">
                  
                  {/* Drawing Deck pile */}
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      whileHover={gamePhase === 'draw' && !players[currentPlayerIdx].isAI ? { scale: 1.05, y: -4 } : {}}
                      onClick={handlePlayerDraw}
                      className={`w-28 h-40 rounded-2xl border-3 flex flex-col justify-between p-3 select-none transition-all duration-300 ${
                        gamePhase === 'draw' && !players[currentPlayerIdx].isAI
                          ? 'bg-gradient-to-br from-indigo-600 to-indigo-850 border-white/30 shadow-xl cursor-pointer animate-pulse'
                          : 'bg-white/5 border-white/10 opacity-40 pointer-events-none'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm bg-white/10 px-1.5 py-0.5 rounded text-white font-mono">D</span>
                        <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <div className="flex items-center justify-center py-2 text-white">
                        <Inbox className="w-10 h-10 stroke-[1.5] text-indigo-200 animate-bounce" />
                      </div>

                      <div className="text-center">
                        <span className="text-[10px] block font-black text-rose-200">DOMICARE</span>
                        <span className="text-xs font-bold text-white font-mono">{deck.length} Pcs</span>
                      </div>
                    </motion.div>

                    <span className="text-xs font-semibold text-indigo-200">
                      {t.deckRemaining}
                    </span>
                  </div>

                  {/* Discard Pile */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-28 h-40 rounded-2xl border-2 border-white/10 bg-black/45 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                      
                      {discardPile.length > 0 ? (
                        <div className={`absolute inset-0 bg-gradient-to-br ${discardPile[0].color} ${discardPile[0].borderColor} border p-2 flex flex-col justify-between text-xs overflow-hidden`}>
                          {/* Dynamic Background Premium Effect */}
                          <CharacterBgEffect character={discardPile[0].character} size="sm" customBgImage={discardPile[0].bgImage} />

                          <div className="flex justify-between font-mono font-bold z-10">
                            <span>{discardPile[0].arabicLetter}</span>
                            <span>{discardPile[0].points > 0 ? `+${discardPile[0].points}` : discardPile[0].points}</span>
                          </div>
                          
                          <div className="text-5xl my-auto text-center flex items-center justify-center z-10">
                            {discardPile[0].image ? (
                              <img 
                                src={discardPile[0].image} 
                                alt=""
                                referrerPolicy="no-referrer"
                                className="w-20 h-20 object-contain animate-pulse"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const fallback = e.currentTarget.parentElement?.querySelector('.discard-emoji-fallback');
                                  if (fallback) fallback.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <span className={`discard-emoji-fallback ${discardPile[0].image ? 'hidden' : ''}`}>{discardPile[0].emoji}</span>
                          </div>
                          
                          <span className="text-[9px] font-bold text-center line-clamp-1 z-10">
                            {t[discardPile[0].nameKey]}
                          </span>
                        </div>
                      ) : (
                        <div className="text-center p-3 text-white/40 text-xs">
                          {lang === 'ar' ? 'فارغ' : 'Empty'}
                        </div>
                      )}

                    </div>

                    <span className="text-xs font-semibold text-indigo-200">
                      {t.playedCardsPile}
                    </span>
                  </div>

                </div>

                {/* Phase Instructions Prompt */}
                <div className="w-full bg-black/35 py-3 px-4 rounded-2xl border border-white/5 shadow-inner">
                  <span className="text-[10px] text-indigo-300 block uppercase font-bold tracking-wider mb-1">
                    {lang === 'ar' ? '📋 خطوة اللعبة التالية' : '📋 Next Turn Step'}
                  </span>
                  
                  <p className="text-sm font-bold text-white min-h-6 flex items-center justify-center">
                    {gamePhase === 'draw' && !players[currentPlayerIdx].isAI && (
                      <span className="flex items-center gap-1.5 text-indigo-300 animate-pulse font-extrabold">
                        <ArrowRight className="w-4 h-4" />
                        {t.playerTurn}
                      </span>
                    )}

                    {gamePhase === 'play' && !players[currentPlayerIdx].isAI && (
                      <span className="text-emerald-300 animate-pulse">
                        {lang === 'ar' ? 'حدد كارت من يدك لسحبه وإلقائه ضد الخصم أو رفد نقاطك!' : 'Choose one card below to deploy! Click to deploy.'}
                      </span>
                    )}

                    {gamePhase === 'resolve_target' && !players[currentPlayerIdx].isAI && (
                      <span className="text-amber-300 animate-bounce">
                        {lang === 'ar' ? '⚠️ هجوم مسبب تكسر! اضغط على أيقونة اللاعب في الأعلى لتوجيه الكارت.' : '⚠️ Target an opponent from the upper cards! Click player.'}
                      </span>
                    )}

                    {gamePhase === 'ai_thinking' && (
                      <span className="text-slate-350 flex items-center gap-1.5 font-sans">
                        <Tv className="w-4 h-4 animate-spin text-white" />
                        {t.aiTurn}
                      </span>
                    )}

                    {gamePhase === 'ended' && (
                      <span className="text-amber-300">
                        {t.gameOver}
                      </span>
                    )}
                  </p>
                </div>

              </div>

              {/* Game Log ticker (7 Cols) */}
              <div className="lg:col-span-7 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-3xl flex flex-col justify-between shadow-xl">
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-indigo-200 border-b border-white/10 pb-3 mb-3">
                    {t.gameLog}
                  </h4>
                </div>

                {/* Logs viewport */}
                <div className="space-y-2 max-h-[178px] overflow-y-auto pr-1 flex-1">
                  
                  {gameLogs.length > 0 ? (
                    gameLogs.map((log) => (
                      <div 
                        key={log.id} 
                        className={`text-xs p-2.5 rounded-xl border flex items-center justify-between gap-2 leading-relaxed ${
                          log.type === 'success' ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' :
                          log.type === 'danger' ? 'bg-red-500/15 text-red-300 border-red-500/25' :
                          log.type === 'shield' ? 'bg-sky-500/15 text-sky-200 border-sky-500/25' : 
                          log.type === 'warning' ? 'bg-amber-500/15 text-amber-300 border-amber-500/25' : 'bg-white/5 text-indigo-55 border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                           <span className="text-indigo-200/50 font-mono text-[9px] select-none font-bold">{log.timestamp}</span>
                          <p className="font-medium text-white/95">{log.message}</p>
                        </div>

                        {log.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        {log.type === 'danger' && <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10 text-white/30 font-mono text-xs">
                      {lang === 'ar' ? 'السجل فارغ. ابدأ سحب بطاقتك لتسجيل التفاعلات.' : 'Logs empty. Take play turns to fill calculations.'}
                    </div>
                  )}

                </div>

                {/* Mini instruction tip footer */}
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-indigo-200 flex gap-2 justify-center leading-relaxed">
                  <span>💡</span>
                  <p className="font-semibold text-white/80">
                    {lang === 'ar' 
                      ? 'النفتالين خطير للغاية يخصم 3 نقاط، احصنه ببطاقة حمى أو قصبو بسرعة!' 
                      : 'Naphthalene is deadly severe (-3 points). Shield yourself before opponents throw fava or medicine triggers!'}
                  </p>
                </div>

              </div>

            </div>

            {/* DANGER TARGETING SELECTION ASSIST SHEET */}
            {gamePhase === 'resolve_target' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-2xl text-center shadow-xl"
              >
                <span className="text-sm font-bold text-red-200 block mb-3">
                  {lang === 'ar' ? '🔍 اضغط على خصمك المستهدف لشن الهجوم الوقائي:' : '🔍 Click opponent below to declare targeted oxidative attack:'}
                </span>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {players.map((plr, index) => {
                    if (plr.id === 'human') return null;
                    return (
                      <button
                        key={plr.id}
                        type="button"
                        onClick={() => selectTargetResolve(plr.id)}
                        className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 transition font-bold text-sm shrink-0 flex items-center gap-2 cursor-pointer text-white"
                      >
                        <span className="text-xl">{plr.avatar}</span>
                        <span>{plr.name} ({plr.score} {t.points})</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* BOTTOM BOARD: USER'S HAND PANEL CARDS */}
            <div id="users-hand-panel" className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl relative shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-indigo-200 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></span>
                  <span>{t.yourHand} ({players[0]?.hand.length || 0})</span>
                </h3>

                <span className="text-xs text-indigo-200 italic font-medium">
                  {lang === 'ar' ? 'انقر على كارت لـلعبه وتفعيله مباشرة' : 'Click on any card to play and activate'}
                </span>
              </div>

              {/* HAND CARDS ROW SCROLL GRID */}
              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 custom-scrollbar">
                
                {players[0]?.hand.map((card) => {
                  const isTurnActivePlay = gamePhase === 'play' && !players[currentPlayerIdx].isAI;
                  const glassy = getGlassyCardStyle(card.character);
                  
                  return (
                    <motion.div
                      key={card.id}
                      whileHover={isTurnActivePlay ? { y: -12, scale: 1.03 } : {}}
                      onClick={() => {
                        if (isTurnActivePlay) handleHumanCardSelect(card);
                      }}
                      className={`w-36 h-52 shrink-0 rounded-2xl border-3 p-3 flex flex-col justify-between select-none relative overflow-hidden transition-all duration-300 ${glassy.bg} ${glassy.border} ${glassy.text} ${glassy.glow} ${
                        isTurnActivePlay 
                          ? 'cursor-pointer hover:shadow-xl shadow-md' 
                          : 'opacity-50 grayscale-xs cursor-not-allowed'
                      }`}
                    >
                      {/* Dynamic Background Premium Effect in Hand */}
                      <CharacterBgEffect character={card.character} size="sm" customBgImage={card.bgImage} />

                      {/* Top bar indices */}
                      <div className="flex justify-between items-center text-xs font-bold leading-none z-10">
                        <span className="w-6 h-6 rounded-full bg-white/15 border border-white/20 flex items-center justify-center font-bold text-white shadow-xs">
                          {card.arabicLetter}
                        </span>

                        <span className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center text-white ${
                          card.points > 0 ? 'bg-emerald-500' : card.points === 0 ? 'bg-sky-500' : 'bg-red-500'
                        }`}>
                          {card.points > 0 ? `+${card.points}` : card.points}
                        </span>
                      </div>

                      {/* Mascot Emoji / Custom Image */}
                      <div className="text-6xl text-center my-auto filter drop-shadow select-none group-hover:scale-110 transition-transform duration-300 flex items-center justify-center z-10">
                        {card.image ? (
                          <img 
                            src={card.image} 
                            alt=""
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.parentElement?.querySelector('.game-emoji-fallback');
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <span className={`game-emoji-fallback ${card.image ? 'hidden' : ''}`}>{card.emoji}</span>
                      </div>

                      {/* Sub-label identity */}
                      <div className="text-center mt-auto z-10">
                        <h4 className="text-[11px] font-extrabold tracking-tight text-white truncate">
                          {t[card.nameKey]}
                        </h4>
                        <span className="text-[8px] opacity-80 font-semibold block leading-none mt-0.5 text-white/90">
                          {card.type.toUpperCase()}
                        </span>
                      </div>

                      {/* Small shine border for rarity */}
                      {card.isRare && (
                        <div className="absolute inset-0 border border-amber-350 rounded-2xl pointer-events-none opacity-50 z-10"></div>
                      )}
                    </motion.div>
                  );
                })}

                {players[0]?.hand.length === 0 && (
                  <div className="w-full text-center py-10 text-white/40 font-mono text-sm leading-relaxed">
                    {lang === 'ar' ? 'لا توجد بطاقات في يدك حالياً. اضغط على كومة السحب كارت أولاً!' : 'No cards in hand. Click the draw pile first to draw!'}
                  </div>
                )}

              </div>

            </div>

            {/* END OVERLAY SCREEN DIALOG IN CASE OF GAME OVER */}
            <AnimatePresence>
            {winner && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" />

                {/* Celebration Card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl z-10"
                >
                  <div className="text-7xl mb-4 select-none animate-bounce">
                    {winner.id === 'human' ? '🏆✨' : '🤖💔'}
                  </div>

                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                    {t.gameOver}
                  </h3>

                  <p className="text-indigo-100 text-base mb-6 leading-relaxed font-semibold">
                    {winner.id === 'human' ? t.victoryMessage : t.defeatMessage}
                  </p>

                  {/* Result parameters */}
                  <div className="bg-black/40 p-4 rounded-2xl border border-white/10 flex justify-around items-center mb-8 shadow-inner">
                    <div>
                      <span className="text-[10px] text-indigo-305 uppercase font-black tracking-widest">{lang === 'ar' ? 'المنتصر' : 'Victor'}</span>
                      <span className="text-white text-base font-extrabold block mt-0.5">{winner.name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-indigo-305 uppercase font-black tracking-widest">{lang === 'ar' ? 'النقاط الفائزة' : 'Final Points'}</span>
                      <span className="text-amber-305 text-lg font-black block mt-0.5">{winner.score} Pts</span>
                    </div>
                  </div>

                  {/* CTR Controls */}
                  <button
                    onClick={() => {
                      setWinner(null);
                      setGameStarted(false);
                      setGamePhase('setup');
                    }}
                    className="w-full py-4 bg-white text-indigo-950 font-black rounded-xl hover:bg-slate-100 tracking-wide transition border border-white/30 cursor-pointer flex items-center justify-center gap-2 shadow-lg animate-none"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>{t.playAgain}</span>
                  </button>
                </motion.div>
              </div>
            )}
            </AnimatePresence>

          </div>
        )}

      </div>
    </section>
  );
}
