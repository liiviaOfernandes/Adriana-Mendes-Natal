const AM_DEMO_SEED = {
  campaign: {
    name: 'Natal 2026', start: '2026-11-20', end: '2026-12-06',
    address: 'Estúdio Adriana Mendes • Monte Carmelo - MG', whatsapp: '5534999999999',
    slots: ['08:00','09:30','11:00','13:30','15:00','16:30','18:00'],
    palette: ['#786C60','#B39D83','#BD7551','#73745F','#F2EDE5']
  },
  users: [
    {id:'u1',name:'Adriana',fullName:'Adriana Mendes',email:'adriana@demo.local',password:'Natal2026!',role:'owner',roleLabel:'Proprietária',permissions:['dashboard','agenda','clientes','financeiro','selecao','entregas','mensagens','config']},
    {id:'u2',name:'Brenda',fullName:'Brenda',email:'brenda@demo.local',password:'Brenda2026!',role:'atendimento',roleLabel:'Atendimento',permissions:['dashboard','agenda','clientes','financeiro','selecao','entregas','mensagens']},
    {id:'u3',name:'Alice',fullName:'Alice',email:'alice@demo.local',password:'Alice2026!',role:'edicao',roleLabel:'Edição',permissions:['dashboard','clientes','selecao','entregas']},
    {id:'u4',name:'Lívia',fullName:'Lívia',email:'livia@demo.local',password:'Livia2026!',role:'master',roleLabel:'Administração geral',permissions:['dashboard','agenda','clientes','financeiro','selecao','entregas','mensagens','config']}
  ],
  clients: [
    {
      id:'c1',name:'Mariana Almeida',email:'mariana@demo.local',whatsapp:'3499991111',code:'24109',status:'session_done',group:'done',
      package:'Experiência Média',packageValue:650,paid:650,appointment:{date:'2026-11-20',time:'13:30'},photo:'assets/img/portfolio-familia-1.jpg',
      availability:'Seg/Qua/Sex à tarde',members:['Mariana','Rafael','Clara • 5 anos'],nextAction:'Colher feedback e preparar seleção',
      briefing:{clothes:['assets/img/natal-menina-1.png'],client:['assets/img/portfolio-infantil.jpg'],dry:['assets/img/natal-menina-2.png','assets/img/portfolio-familia-2.jpg']},
      selection:{email:'mariana@demo.local',url:'https://example.com/selecao-mariana',password:'5812',deadline:'2026-11-25',sent:false,completed:false},
      delivery:null,feedback:null,
      history:[['Ensaio realizado','20/11/2026 • 14:28'],['Agendado','03/11/2026 • 11:39'],['Reserva confirmada','03/11/2026 • 11:35']]
    },
    {
      id:'c2',name:'Família Oliveira',email:'familia.oliveira@demo.local',whatsapp:'3499992222',code:'77210',status:'scheduled',group:'new',
      package:'Experiência Premium',packageValue:990,paid:150,appointment:{date:'2026-11-21',time:'09:30'},photo:'',availability:'Sábado + terça de manhã',members:['Camila','Henrique','Theo • 4 anos'],nextAction:'Confirmar saldo e briefing',
      briefing:{clothes:['assets/img/portfolio-infantil.jpg'],client:[],dry:['assets/img/natal-menina-1.png']},selection:null,delivery:null,feedback:null,
      history:[['Agendado','06/11/2026 • 16:14'],['Entrada recebida','06/11/2026 • 16:03']]
    },
    {
      id:'c3',name:'Larissa Gonçalves',email:'larissa@demo.local',whatsapp:'3499993333',code:'41408',status:'selection_sent',group:'done',
      package:'Experiência Básica',packageValue:480,paid:480,appointment:{date:'2026-11-22',time:'16:30'},photo:'assets/img/portfolio-familia-2.jpg',availability:'Domingo ou quinta à tarde',members:['Larissa','Paulo','Bia • 2 anos'],nextAction:'Acompanhar finalização da galeria',
      briefing:{clothes:[],client:['assets/img/natal-menina-2.png'],dry:['assets/img/portfolio-familia-1.jpg']},
      selection:{email:'larissa@demo.local',url:'https://example.com/selecao-larissa',password:'9921',deadline:'2026-11-27',sent:true,completed:false},delivery:null,feedback:{service:5,studio:5,feeling:5,comment:'Foi leve e muito gostoso com a Bia.'},
      history:[['Seleção liberada','23/11/2026 • 09:20'],['Ensaio realizado','22/11/2026 • 17:45']]
    },
    {
      id:'c4',name:'Ana Paula Ribeiro',email:'ana.paula@demo.local',whatsapp:'3499994444',code:'30117',status:'editing',group:'done',
      package:'Experiência Premium',packageValue:990,paid:990,appointment:{date:'2026-11-23',time:'15:00'},photo:'assets/img/portfolio-infantil.jpg',availability:'Segunda e sexta à tarde',members:['Ana Paula','Miguel • 7 anos'],nextAction:'Alice: finalizar edição até 30/11',
      briefing:{clothes:['assets/img/natal-menina-1.png'],client:[],dry:['assets/img/natal-menina-2.png']},
      selection:{email:'ana.paula@demo.local',url:'https://example.com/selecao-ana',password:'1107',deadline:'2026-11-26',sent:true,completed:true},delivery:null,feedback:{service:5,studio:4,feeling:5,comment:'Miguel ficou super à vontade.'},
      history:[['Em edição','27/11/2026 • 10:10'],['Seleção finalizada','26/11/2026 • 20:30']]
    },
    {
      id:'c5',name:'Família Monteiro',email:'monteiro@demo.local',whatsapp:'3499995555',code:'90906',status:'completed',group:'final',
      package:'Experiência Média',packageValue:650,paid:650,appointment:{date:'2026-11-24',time:'11:00'},photo:'assets/img/portfolio-familia-1.jpg',availability:'Terça e quarta de manhã',members:['Juliana','Fábio','Luna • 3 anos'],nextAction:'Atendimento finalizado',
      briefing:{clothes:[],client:[],dry:[]},selection:{email:'monteiro@demo.local',url:'https://example.com/sel',password:'3141',deadline:'2026-11-27',sent:true,completed:true},
      delivery:{id:'d1',token:'natal-familia-monteiro',drive:'https://drive.google.com/',date:'2026-12-01',message:'Juliana, foi uma alegria guardar o Natal de vocês. Que essas fotografias façam a Luna reviver esse carinho por muitos dezembros.'},feedback:{service:5,studio:5,feeling:5,comment:'Amamos tudo!'},
      history:[['Cliente finalizada','01/12/2026 • 16:20'],['Galeria final liberada','01/12/2026 • 15:48']]
    },
    {
      id:'c6',name:'Beatriz Cardoso',email:'bia@demo.local',whatsapp:'3499996666',code:'88214',status:'lead',group:'new',package:'',packageValue:0,paid:0,appointment:null,photo:'',availability:'Sábado ou quarta à tarde',members:['Beatriz','Caio','Lucca • 1 ano'],nextAction:'Verificar disponibilidade e enviar 2 opções',briefing:{clothes:[],client:[],dry:[]},selection:null,delivery:null,feedback:null,history:[['Novo interesse','02/10/2026 • 10:14']]
    }
  ],
  expenses: [
    {id:'e1',category:'Marketing',description:'Impulsionamento de lançamento',amount:380,date:'2026-09-28'},
    {id:'e2',category:'Cenário',description:'Elementos iniciais do cenário',amount:1250,date:'2026-09-20'},
    {id:'e3',category:'Brindes',description:'Amostras de embalagem premium',amount:420,date:'2026-10-01'}
  ],
  messages: {
    today:'Bom dia com muita alegria! Que tenhamos um dia lindo. Seu horário se inicia hoje às {hora}. Se precisarem adiantar ou atrasar um pouquinho, avise a gente por favor. Vamos arrasar nas fotos!',
    urgent:'URGENTE, FINALIZE SUA GALERIA e colabore com nossa agilidade nas entregas!\n\nÉ de extrema importância para a logística, que a galeria seja finalizada dentro do prazo. Após o primeiro vencimento, colocaremos à disposição mais uma renovação sem custos. Se tiver dificuldades quanto à seleção, nos comunique.\n\nAtt. Estúdio Adriana Mendes.',
    selection:'{nome}, sua galeria de seleção já está disponível. Confira com carinho e finalize até {prazo}. Acesso: {link} • senha: {senha}.',
    prints:'{nome}, suas fotografias reveladas estão prontas para retirada. Estamos esperando vocês no Estúdio Adriana Mendes.',
    delivery:'{nome}, seu Natal está pronto para ser revivido. Preparamos uma entrega especial para vocês: {link}'
  },
  deliveries:[
    {id:'d1',clientId:'c5',clientName:'Família Monteiro',email:'monteiro@demo.local',drive:'https://drive.google.com/',date:'2026-12-01',token:'natal-familia-monteiro',message:'Juliana, foi uma alegria guardar o Natal de vocês. Que essas fotografias façam a Luna reviver esse carinho por muitos dezembros.'}
  ]
};

const AMDemo = (() => {
  const KEY='am_natal_demo_v2';
  const SESSION='am_natal_demo_session';
  function clone(v){return JSON.parse(JSON.stringify(v));}
  function load(){try{return JSON.parse(localStorage.getItem(KEY))||clone(AM_DEMO_SEED)}catch(e){return clone(AM_DEMO_SEED)}}
  function save(data){localStorage.setItem(KEY,JSON.stringify(data));return data}
  function reset(){localStorage.removeItem(KEY);localStorage.removeItem(SESSION)}
  function session(){try{return JSON.parse(localStorage.getItem(SESSION))||null}catch(e){return null}}
  function setSession(s){localStorage.setItem(SESSION,JSON.stringify(s))}
  function logout(){localStorage.removeItem(SESSION)}
  function money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
  function dateBR(s){if(!s)return '—';const [y,m,d]=String(s).slice(0,10).split('-');return `${d}/${m}/${y}`}
  function firstName(name){return String(name||'').trim().split(/\s+/)[0]||''}
  function statusLabel(s){return ({lead:'Novo interesse',contacting:'Em atendimento',awaiting_reservation:'Aguardando reserva',scheduled:'Agendado',session_done:'Ensaio realizado',awaiting_full_payment:'Aguardando pagamento total',selection_sent:'Enviado para seleção',selecting:'Selecionando fotos',awaiting_editing:'Aguardando edição',editing:'Em edição',link_available:'Link disponível',awaiting_prints:'Aguardando reveladas',prints_ready:'Reveladas prontas',completed:'Cliente finalizada'})[s]||s}
  function dailyMessage(){
    const items=[
      'Que hoje a gente cuide de cada família como quem prepara uma lembrança para durar muitos Natais.',
      'Organização também é carinho: quando cada detalhe está no lugar, sobra espaço para receber bem.',
      'Uma fotografia começa antes do clique — no cuidado com a agenda, no atendimento e na experiência.',
      'Que o dia seja leve, produtivo e cheio de pequenos detalhes que façam cada cliente se sentir especial.',
      'Cada família que entra no estúdio traz uma história. Nosso trabalho é fazer com que ela se sinta vista.'
    ];
    const d=new Date();return items[(d.getDate()+d.getMonth())%items.length];
  }
  function greeting(name){const h=new Date().getHours();return `${h<12?'Bom dia':h<18?'Boa tarde':'Boa noite'}, ${name}.`}
  return {load,save,reset,session,setSession,logout,money,dateBR,firstName,statusLabel,dailyMessage,greeting};
})();
