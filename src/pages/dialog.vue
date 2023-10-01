<script setup lang='ts'>
import ContentType from '../../cactbot/resources/content_type';
import ZoneInfo from '../../cactbot/resources/zone_info';
import UserConfig from '../../cactbot/resources/user_config';
import { commonNetRegex } from '../../cactbot/resources/netregexes';
import { LocaleNetRegex } from '../../cactbot/resources/translations';
const ContentTypeReverse: { [key: number]: string } = Object.fromEntries(Object.entries(ContentType).map(([k, v]) => [v, k]))

interface ChatCodes {
  code: string,
  name: string,
  color: string,
  prefix?: string,
  suffix?: string,
  enable: boolean
}
const ChatCodes: ChatCodes[] = [
  {
    'code': '000A',
    'name': 'Say',
    'color': '#f7f7f7',
    'enable': true
  },
  {
    'code': '000B',
    'name': 'Shout',
    'color': '#ffa362',
    'enable': true
  },
  {
    'code': '000E',
    'name': 'Party',
    'color': '#62e4ff',
    'enable': true
  },
  {
    'code': '000C',
    'name': 'Tell',
    'prefix': ' >> ',
    'color': '#ffb6dd',
    'enable': true
  },
  {
    'code': '000D',
    'name': 'Tell',
    'suffix': ' >> ',
    'color': '#ffb6dd',
    'enable': true
  },
  {
    'code': '0018',
    'name': 'FreeCompany',
    'color': '#a8dae4',
    'prefix': '[FC]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '001E',
    'name': 'Yell',
    'color': '#ffff00',
    'enable': true
  },
  {
    'code': '000F',
    'name': 'Alliance',
    'color': '#ff7b00',
    'enable': true
  },
  {
    'code': '0010',
    'name': 'LinkShell1',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0011',
    'name': 'LinkShell2',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0012',
    'name': 'LinkShell3',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0013',
    'name': 'LinkShell4',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0014',
    'name': 'LinkShell5',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0015',
    'name': 'LinkShell6',
    'color': '#FFD4FF',
    'enable': true
  },
  {
    'code': '0016',
    'name': 'LinkShell7',
    'color': '#FFD4FF',
    'enable': true
  },
  {
    'code': '0017',
    'name': 'LinkShell8',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '0025',
    'name': 'CWLS1',
    'color': '#d2ff79',
    'prefix': '[CWLS1]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '0065',
    'name': 'CWLS2',
    'color': '#d2ff79',
    'prefix': '[CWLS2]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '0066',
    'name': 'CWLS3',
    'color': '#d2ff79',
    'prefix': '[CWLS3]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '0067',
    'name': 'CWLS4',
    'color': '#d2ff79',
    'prefix': '[CWLS4]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '0068',
    'name': 'CWLS5',
    'color': '#d2ff79',
    'prefix': '[CWLS5]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '0069',
    'name': 'CWLS6',
    'color': '#d2ff79',
    'prefix': '[CWLS6]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '006A',
    'name': 'CWLS7',
    'color': '#d2ff79',
    'prefix': '[CWLS7]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '006B',
    'name': 'CWLS8',
    'color': '#d2ff79',
    'prefix': '[CWLS8]<',
    'suffix': '> ',
    'enable': true
  },
  {
    'code': '001B',
    'name': 'NoviceNetwork',
    'color': '#d2ff79',
    'enable': true
  },
  {
    'code': '001C',
    'name': 'CustomEmotes',
    'color': '#b8ffef',
    'enable': true
  }
];
const CodeMap: { [key: string]: ChatCodes } = {};
const colorMap = ref<{ [key: string]: string }>({});
ChatCodes.forEach(e => {
  CodeMap[e.code] = e;
  colorMap.value[e.name] = e.color;
})
const Loglines: { [key: string]: string | boolean }[] = reactive([]);
const Options = { ...UserConfig.getDefaultBaseOptions() }

onMounted(async () => {
  UserConfig.getUserConfigLocation('dialog', Options, () => {
    // addOverlayListener('onLogEvent', handleLogEvent);
    addOverlayListener('ChangeZone', handleChangeZone);
    addOverlayListener('LogLine', handleLogLine);
    startOverlayEvents();
  });


});
onUnmounted(() => {
  // removeOverlayListener('onLogEvent', handleLogEvent);
  removeOverlayListener('ChangeZone', handleChangeZone);
  removeOverlayListener('LogLine', handleLogLine);
});

function handleChangeZone(ev: any) {
  ev.contentType = undefined;
  const zoneInfo = ZoneInfo[ev.zoneID];
  if (!zoneInfo || !zoneInfo.contentType) {
    console.log(ev)
    return;
  }
  ev.contentType = ContentTypeReverse[zoneInfo.contentType]
  console.log(ev, zoneInfo.name[Options.ParserLanguage])
}
const isWipe = (line: string): boolean => {
  return commonNetRegex.wipe.test(line) || commonNetRegex.userWipeEcho.test(line) || commonNetRegex.cactbotWipeEcho.test(line);
}
const isCountDownStart = (line: string): boolean => {
  return LocaleNetRegex.countdownStart['cn'].test(line) || LocaleNetRegex.countdownStart[Options.ParserLanguage].test(line);
}

function handleLogLine(ev: { line: string[], rawLine: string, type: string }) {
  if (isWipe(ev.rawLine)) {
    console.log('isWiped: ', ev.rawLine)
  }
  if (isCountDownStart(ev.rawLine)) {
    console.log('isCountDownStart: ', ev.rawLine)
  }
  if (ev.line[0] !== '00')
    return;
  const meta = CodeMap[ev.line[2]];
  const log = {
    time: ev.line[1].substring(11, 19),
    player: ev.line[3],
    line: ev.line[4],
  }
  if (!meta || !meta.enable || log.line === '')
    return;
  const item = { ...meta, ...log };
  Loglines.push(item)
}

</script>

<template>
  <div class='dialog'>
    <p v-for="(item, index) in Loglines" :key="index">
      <span class="dialog-time">[{{ item.time }}] </span>
      <span :class="'dialog-' + item.name">{{ item.prefix }}{{ item.player }}{{ item.suffix ?? ' : ' }}{{ item.line
      }}</span>
    </p>
  </div>
</template>

<style lang='scss'>
@import "@/css/ffxiv-axis-font-icons.css";

* {
  font-family: "FFXIV", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
    Arial, sans-serif;
  pointer-events: initial;
  font-size: 18px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: rgba(51, 51, 51, 1);
}

::-webkit-scrollbar-thumb {
  height: 30px;
  border-radius: 5px;
  background-color: rgba(216, 216, 216, 0.4);
}

::-webkit-scrollbar-thumb:active {
  background-color: rgba(160, 160, 160, 1);
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog {
  padding: 5px;
}

.dialog p {
  margin: 0;
  line-height: 22px;
  word-break: break-all;
}

.dialog-time {
  color: #f7f7f7;
}

.dialog-Say {
  color: v-bind('colorMap.Say');
}

.dialog-Shout {
  color: v-bind('colorMap.Shout');
}

.dialog-Party {
  color: v-bind('colorMap.Party');
}

.dialog-Tell {
  color: v-bind('colorMap.Tell');
}

.dialog-FreeCompany {
  color: v-bind('colorMap.FreeCompany');
}

.dialog-Yell {
  color: v-bind('colorMap.Yell');
}

.dialog-Alliance {
  color: v-bind('colorMap.Alliance');
}

.dialog-LinkShell1 {
  color: v-bind('colorMap.LinkShell1');
}

.dialog-LinkShell2 {
  color: v-bind('colorMap.LinkShell2');
}

.dialog-LinkShell3 {
  color: v-bind('colorMap.LinkShell3');
}

.dialog-LinkShell4 {
  color: v-bind('colorMap.LinkShell4');
}

.dialog-LinkShell5 {
  color: v-bind('colorMap.LinkShell5');
}

.dialog-LinkShell6 {
  color: v-bind('colorMap.LinkShell6');
}

.dialog-LinkShell7 {
  color: v-bind('colorMap.LinkShell7');
}

.dialog-LinkShell8 {
  color: v-bind('colorMap.LinkShell8');
}

.dialog-CWLS1 {
  color: v-bind('colorMap.CWLS1');
}

.dialog-CWLS2 {
  color: v-bind('colorMap.CWLS2');
}

.dialog-CWLS3 {
  color: v-bind('colorMap.CWLS3');
}

.dialog-CWLS4 {
  color: v-bind('colorMap.CWLS4');
}

.dialog-CWLS5 {
  color: v-bind('colorMap.CWLS5');
}

.dialog-CWLS6 {
  color: v-bind('colorMap.CWLS6');
}

.dialog-CWLS7 {
  color: v-bind('colorMap.CWLS7');
}

.dialog-CWLS8 {
  color: v-bind('colorMap.CWLS8');
}

.dialog-NoviceNetwork {
  color: v-bind('colorMap.NoviceNetwork');
}

.dialog-CustomEmotes {
  color: v-bind('colorMap.CustomEmotes');
}
</style>
