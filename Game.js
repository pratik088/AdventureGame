const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    INITIAL: Symbol("initial"),
    LEFT: Symbol("left"),
    RIGHT: Symbol("right"),
    CHASE: Symbol("chase"),
    BED: Symbol("bed"),
    HOME: Symbol("home"),
    HOMEWORK: Symbol("homework"),
    FIGHT: Symbol("fight"),
    JUNGLE: Symbol("jungle"),
    RESULT: Symbol("result"),
    BOXER: Symbol("boxer"),
    GIFT: Symbol("gift")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                    if(sInput.toLowerCase().match("start")){
                sReply = `Welcome to the quest.
                        The experience lets you choose which path to take and builds the story as you go. 
                        Have fun and choose wisely. Which way you want to go? 
                        Make your decision left or right???`;
                this.stateCur = GameState.INITIAL;
                    }
                    else{
                        sReply = "Please write start to enter the quest.";
                    }
                break;
            case GameState.INITIAL:
                if(sInput.toLowerCase().match("left")){
                sReply = `There are two worlds to explore.
                            You use portal to travel. 
                            The first where you are right now is Zeffo.
                            And the second is Earth.
                            You are given a box for the items you collect.
                            The other players might try to steal your box.
                            Now enjoy the quest and choose wisely.
                            Choose a door A or B???`;
                    this.stateCur = GameState.LEFT;
                }
                else if(sInput.toLowerCase().match("right")){
                    sReply = `You are at the Castle and the only way to go is left.
                    Do you want to go left?
                    press left to go inside.`; 
                }
                else{
                    sReply = "Please make a selection!! Left or Right?";  
                }
                break;
            case GameState.LEFT:
                if(sInput.toLowerCase().match("a")){
                sReply = `You are going ahead slowly and 
                your box has stolen. Write continue to chase.`;
                this.stateCur = GameState.CHASE;
                }
                else if(sInput.toLowerCase().match("b")){
                    sReply = `You are in your bed. 
                    Please select from this. Wake up or sleep?`;
                    this.stateCur = GameState.BED;
                }
                else{
                    sReply = "Please make the right choice.";
                }
                break;

            case GameState.CHASE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = `You are chasing the guy.
                                The guy falls on the ground.
                                Guy : Hey, man I am sorry. I am unarmed and 
                                I stole your box because somebody stole mine. 
                                Here is your box and you never see me again.
                                Now you are getting a call. Its your dad. That thing happens if
                                you choose door A. 
                                Do you want to pick the call?`;
                    this.stateCur = GameState.HOME;
                            }
                else{
                    sReply = "Please write continue.";
                }
                break;
            
            case GameState.HOME:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Dad : Did you finish your home work?";
                    this.stateCur = GameState.HOMEWORK;
                }
                else{
                    sReply = "Please write yes."
                }
                break;
            case GameState.HOMEWORK:
                if(sInput.toLowerCase().match("yes")){
                    sReply = `Dad : So you completed your homework last time.
                                Because your teacher is emailing me that you did not finish your
                                homework. And there are consequences of hiding the truth.
                                You lose the game!! 
                                Write Continue to use 1 life`;
                        this.stateCur = GameState.JUNGLE;
                }
                else if(sInput.toLowerCase().match("no")){
                    sReply = `Dad : You must finish your homework every time but
                                you told the truth so you win the game!`;
                        this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Please write yes or no!!"
                }
                break;

            case GameState.JUNGLE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = `Welcome to your first fight.
                                The masked attacker is attacking you.
                                do you want to attack left or right?`;
                    this.stateCur = GameState.RESULT;
                }
                else{
                    sReply = "Please write continue";
                }
                break;

            case GameState.BED:
                if(sInput.toLowerCase().match("wake")){
                    sReply = `You had a breakfast and
                                your boss offers you leadership on the next project.
                                Congrats!! on getting new position you have made the right choice
                                now you are standing against two doors.
                                Do you want to open door C or D?`;
                                this.stateCur = GameState.FIGHT;

                }
                else if(sInput.toLowerCase().match("sleep")){
                    sReply = `Every choice has consequences.
                                Your boss fires you because of showing left at work.
                                Now, you are on the road and you have two doors ahead.
                                Which one you want to choose door C or D?`;
                    this.stateCur = GameState.FIGHT;

                }
                else{

                }
                break;
            case GameState.FIGHT:
                if(sInput.toLowerCase().match("c")){
                    sReply = `Welcome to your first fight.
                                The masked attacker is attacking you.
                                do you want to attack left or right?`;
                    
                    this.stateCur = GameState.RESULT;
                }
                else if(sInput.toLowerCase().match("d")){
                    sReply = ` A boxer is standing against you.
                                Boxer : Why are you telling lies about me?
                                Tell it to my face!
                                This is your chance to take me on.
                                Fight or Walk?`;
                    this.stateCur = GameState.BOXER;
                }
                else{
                    sReply = "Please make right selection!!";
                }
                break;
            
            case GameState.BOXER:
                if(sInput.toLowerCase().match("fight")){
                    sReply = `You are weak against your opponent.
                    He hits you hard on your face and you died.
                    You had other choice like walking away but it doesn't
                    mean that the right choice`;
                    this.stateCur = GameState.WELCOMING;

                }
                else if(sInput.toLowerCase().match("walk")){
                    sReply = `Boxer : Seriously man, You want walk away like coward?
                            Now, boxer hits you on the face and you died.
                            You did the right thing by walking away but things can hurt
                            just like life.`;
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Fight or Walk?";
                }
                break;
            case GameState.RESULT:
                if(sInput.toLowerCase().match("left")){
                    sReply = "FATALITY!!! You died.";
                    this.stateCur = GameState.WELCOMING;
                }
                else if(sInput.toLowerCase().match("right")){
                    sReply = `"You won some goodies
                            There is a lady asking for help.
                            Do you want to offer food or water?`;
                    this.stateCur = GameState.GIFT;
                }
                else{
                    sReply = "Please make correct choice";
                }
                break;
            case GameState.GIFT:
                if(sInput.toLowerCase().match("food")){
                    sReply = `Lady : Thank you for helping me.
                        As a present I am giving you this ring.
                        You made the right choice by helping me.
                        You won!!!!!!!!`;
                    this.stateCur = GameState.WELCOMING;
                }
                else if(sInput.toLowerCase().match("water")){
                    sReply = `Lady : Thank you for helping me.
                        As a present I am giving you this ring.
                        You made the right choice by helping me.
                        You won!!!!!!!!`;
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Please select food or water!!!"
                }
                break;
            
        }
        return([sReply]);
    }
}