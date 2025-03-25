<template>
    <section>
        <main>
            <nav class="nav-bar">
            <div>
                <h2>MindSync</h2>
            </div>
            </nav>
            <canvas ref="canvas"></canvas>
            <div class="info-section">
                <span class="info-text">
                    <h1>Stronger Mind,<span>Stronger You</span></h1>
                    <p>Where mindfulness meets movement for a healthier, happier you</p>
                    <button class="join-us">Get Started</button>
                </span>
                <div class="img-container">
                    <img class="landing-picture" src="https://i.ibb.co/ks1gvSzT/Mind-Sync-Mind-Sync-Mind-Sync.gif" alt="Mind-Sync-Mind-Sync-Mind-Sync">
                </div>
                </div>
        </main>
        <section class="choose-us">
            <h1>Why Choose Us?</h1>
            <div class="card-container">
                <ViewCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEK10d75TFhFvv5FQ8g0SnvehtS6KlicNlQg&s" head="Mind & Body Balance" text="Combines fitness and mindfulness for overall well-being.

" />
                <ViewCard img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PEBAPDw0PDw8QEBAPEBAQDg8QFRUWFhURFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLi4BCgoKDg0OGBAQGi0mICIvLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLSstLS0tLS0tLf/AABEIAMEBBQMBEQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAEYQAAICAQIDBgIFBwgKAwAAAAECAAMRBBIFITEGEyJBUWFxkRRSgaGxBzJCksHR8BYjVXKCk8LhFRdDYmSio7LS0zVTVP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwQCBf/EADIRAQACAgAEBAUDAwQDAAAAAAABAgMRBBIhMRMiQVEUMlJh8HGBkbHB4UJiodEFFTP/2gAMAwEAAhEDEQA/AP2yGIgKAQFAICzAnMBZgGYCzAMwDdAYaA8wHmAZkBmULMBZgLMAzAMwDMB5gPMBgwGIDgOA4BAIBAICgKAswETAkmBJMBFoEloBugItCbiO4Bk28Tmqe75xtK5qz0lYMrU8yB5lCJkCJlEloCLQFukBugPdAYaUPMCwYDBgUIDgMQHAIBAUAgIwJJgQTAkmBJMjzN6x3lJMM5zV9Ch4nNPoMwzm9p9SkeBAIFgyurDO66UDK2GZAi0PF7csbRuMOWclp9RkyJzW9xmU5re4zBzW9xmDmt7jMHNb3GTIc1vcbjKc9vdaNDox5ObpLRTK2WIFQHACYC5n2hekKhCMBQJMCSYGbtDPJflhmTPLlm0z3koeRAIBAIBAIDlb4Z66MGHSMyiWMjDP2gpHMcAgEAgEAgEClla4vmaKZXW0EChAefthdAD1g37KhBAUBGBJgQYGTyS5s/eESMBAIGOq1dVQzbZXWME5d1UYGAevxHzELETPZzcU4rXp6rbcNb3Kd46U7GtWvxeMgsOXgb9Uw9VpNp083X9raaFZnrtzWyLYua/CzVG4qp3eMisbvDkc+vXB6jFMuJuI8RvU1JUE8L1PaosDd5vvr7xHBUABq629Sto6Y5nrlpHVWo4fxO0M7WEA+P6PvUE7WqdKlNZXAwbkJL89qHmMykWpD3eA6a2rS0VXHNtdYRjkt05DJPU4xn3hOaPE3DuBh1HmUSTIwz9oMSOYxAIBAIBAIBAYla4fnWrexldmmik+nzg6LC+pg37KEIcBwFiDZQAwIMCGgZtJLHNHleNxTtDRpbO7t3htjWZ2+HulSyx7B9YKKyCBzBZfUSMa45tG4cNva+sOtQqsFzWJVstKqwcsgYYUtu2rbXYcH81ieWDD1GGdbcnEhxDU16W6pL67LdLaSldxoXS6klGpa1WILqoLqww2cfm+h6ryVmYn3/mGlvZnU3vd9I1H8072bER7bB3bpdWww2NuUsrO3JAaoEdcQni1iI1H50ejwrgAos1TFg9WpWtO7xyAHeNYfbc9rtjyJPPngHi2TcR9np06KpMba0GAgzgFvANqZJ5kgcgZXmbTLeR5EAgQZXfE7jZZz8JXrWgJJc+eekKEjnVCCAQCAQCAQHK1xfOtZXW0WBYgUIDgOAQJMAMCDAzaBmZHm0brMOe/S12FGdQxrLFM+W5SrcvMFSRgyOKJmBpNJVSgrqrrqrGcJWiooz1wBygmZnrLaEMAnpz+ELETPZounY+WPjK1jBefRquk9T8o01jhveWi6ZR7/ExprGCkObUV7Ty6EZhy5qRS3RlIxZ2Dn7Sw7MNvKWZWhiSWGftChI51Qjwe09GrZ9M2m71tjMXRLBXWxymDYd6nGA3k45nKHlg1xzXU7eV9L4lVZXRh2ZhZs8KWKRv1BDWOSdpwKcfo4JBwcCHvVJjf56PQP+kVSt3V7Xp1gdkqamt79MaCCuNwU4tfoSOVYPM4zXnyb/b+7n4HZxJbaabQzV1CpdQ792yEHT7mxYTvdxbtGQCMbs+Ui35NTMfnV9XDAQCVri+daw62iyjQQKEBk4giNpwT7Q9biFYh52MQEYEGBDQMmkCkcNo1MwUPLtopXAOMkjPOV34sVeWJ02AlbvMfSakt4tTtq3sdqIofZklRux16eXl5wkzEd3RQtdW7DMdxycsWx7D09PsEM5zUj1W2r9B85Nsp4n0rDnssLHJhhlm8zu0IkZJs6Sw6ME94Zw6DWJYZu0KEjnVCHAIBAIBAIBK1xfOpIdbVZRoIAG9P8oXXuoL5nmYJn2VCCAoChEmFZtAzaQRDlzR5hIxapqCoxyx7yt8eW8eWsbJtQx8/lyl1LeMXEX+zB7gOpA/rGNPccFv57OWzilIKr3gJbptywPi29R7gj7DLqG1eFxV9NuqHTWsV7QaxPZhxUR4U7VPD4xOORlaYp1aGIldgU9ZJY546Q0EjmaVAFgD0zK9Y4ibREuPhXFbbW2PQxyU3bKxWumDbs1uzvl2UgZwo6ggYIlfRmtZjWnpaZRljjJA5D1khycPWJtO/RxcG1Ft+lF1yhbGdyFAUbV3kKvInPIQ2z1jkmXP2i4nqNJplt02lOrtd+77tQxZSwba+FByoYLkcuRJzygwVjk29Bd/d1G1VW9q1Nqp+YtmBuA9s5iWPE1iJiYeJ2p442ipFiae3UOxIARW2Jjq1jAHaPxh4xYZyfo+V7M9uNTrtdRSUqrpZLt6pli5CswO49ByHSHTXDWvV+iIT6CV66NVz7QdFhfXnBzezQQhwHAICgKBJgQ0DJoESMM0dIkSOYmnqHfwMxzTHqmV9GZiO7l1XDarjusTc23ZnLKcdfI9eZwfLMbhz34nFHrv9HRXQqgAKoAGAAAMSbYW46P8ATVptk2wtxmWfXRw57Xtb5p2JHkQsTrq5SDzHkPvnp9CJiOzwe1vH7NAtDIiOLHdWV8g4AB5EdD9hmmOkX2yyxuGPC+3mktwtofTufr+OvP8AXH7QItgtHZzTSX1VFquodGVkbmrKQykeoImU9Hns6O/bGM/hDSc15jW0qxHMcjDxW01ncG9rN1MPVslrd5CWMvQwVyWr2kmYnmTkw82tNp3LzuK2OuzYxTOckYyDyx1BHrMMt7U1p9T/AMZEW54n7PG0nDKPplGqCP8ASQ1iu6BQjq1T+KwDGDkYDAdSB6YuHJzbie7p4vHFYiYfVJN3A1WBoIFCA4DgEAgIwJMCDAzaBnI8ZI3WSkcQhRBMzPcQggEAgEAgY29ZXbjndYcmu0FOoQ13ItiHybqD6g9QfcSxaazuHjNOtPz/ALQ9hrac2abdfVzJr/2yD2x+ePhz9jOmmaJ6WZRb3eV2a7Q26GzIy1DH+dpJ5H1ZfRv4M0vji8LMbfrGk4hXqat+mtRyVBGCMqT5MOZU/EcvQzitWa92etT1J11e1QG0+7b4iVf87Pl7YnlfKZTV8sPRnAzlXxnLZPLn02jr68oPK20gu8RtNZzjaKwcDrnr18oSdejoh5cms1FOCrn5AkgzzquSeT1deKmfFHjVjUOPh+BcdpyrbsZ+r1AnNjjlyzEfd9jNM24eJt36S9lJ2PmNVlGggUIDgOAQCAoCMCGgZtAyaRBI4ZjU6KEEAgZ6q7u63fyRGf8AVBP7IWI3On5N2Qu1fELzfqdRfZXptrlRa1amxySq+HovIk48gB0kveKRuX2MPD1tOoh+saS4uisQAT1A6ZHWSluaNvncTi8LLarWenOIGV46GWHTgnpMM1iVz9odFKrtLsdqjz6fx1hMOKLxuXj8V7LcM1dgd2C2nkTVaiNYTyG4eZ8umZpXJavSG8YKwyq/JxoVYMr6pXHRluCsPgQuRPXjWXwavodDwoVLt76+0eXfMjsP7QUE/aTM5nfo8zw9HV9FX3+c86T4ag+ir7/ONHw1CbSKQRlh8DziYeo4ekTt5uu4IgrcoWDKC3Mgg4546SYcdaXizpz5r5Mc1l5XCXzYOXQH8Jnkw+Hmjr33LSM/i8NPTWtR/R7yTVxNFlGggUIDgOAQCAjARgSYGbQMmkEw48sasJGYgEDze0FS2UNW1jV7/qBWZx5qQwIKnzzy/A+6Um89Huk6nb5zsz2Xqp1Ntqs57xRyc5IGQWOR1LNgnpjngDpMcla3mIrO4ju+p4t+HxzNo1aeke35D7OtAowBgCeoiIjUPl3vbJbmt1l87XaDqDZWxOzVh7F54C21NXtHl+jW5HtnzEyrlmdzPb0fTy8JEUrSvza3P5/w+kmz5KLh4T85W2GdWYLEtM/aHTp7cZBXcDzx1h5w5Zr01tsgrGMUgYORhFGD69OsN/Hn6Zb/AEj/AHWlPHn6ZeLxntNZpXC/QdVcjDw2UKHU+oIHNT8Z7rTm9VjLv0l538vH/oziP9yf3T34X+6F8X7SP5eP/RnEf7k/ujwv90Hi/aXs6DtALqxZ9H1NZP6FlTKwPnMssTSN9/0e8U+Jfl7feU6/i7FGUVOhYEbnGAM/iZ4rkrFee38e7W2G1r+HX+fSHn8LrO8EDwqDk/EYEzxzOW05L/t+fnd74jkw0rhp69Z/Pzs9pJq42qyjQQKEBwHAIBAUBQJMCGgZNIIhz547SJHOTHAzKOTWa0VDnzsPML5L8f45zTHjm8/ZYh4bs9jZOWc+gyfsE7dVrGvR7jo6qxZXtYqUb3nwstPCv5Z6ej7+LLj4rHNbfvH93TdrGt8C+BSPG5PQeYEs5Zv0jp7uanBVwTz280/6Y/7/ADUMOA8OKNcxYtW972opC4UkBRzABbCqOufTynukRb9I7MuKyTijW/PbvPtHs9ybvlAjPL1h6rOpiXIssujP2h16ctsbZgvkY3dPL/OIe+G1yy2ra/cMrUEz4iGYnHPoPlK6XYIDEBwCAQMtSgZGU9CpEkxExqTnmnmj0edVWFXaBgD+MyOCl7Xyc1p6tUldLRZRoIFCAQp494TocAgEBQJMCGgZNAiRlljdSkcjPUWBV3scImWcnoFVScn5Swr8d1HanUtqLbw3hscsKn5oqjkq+3IDpPpUrFYiGmn6jwnXaIgLTqKLHIGdtiFyfhnIE4snPM+aHidvSuCkYYeE/Ifb5fGYzWLRqVx5LUtzVnUuP/Ri5/OOPgMj7Zh8PG+76X/tL8uuWN+/+GfZjUNZo9OzkG0J3dpAxm2smuw48vErTeI1GofPzTM3mZ9XpwyEDmcYY/H8ZXRkndKy30tZPMHHly6wYsdrdYnTqFDfXb7/AN8NvBt9U/n7qFLfXP3/AL40eDf6p/P3V3DfXP3/AL40eDf6p/P3c3EuH2202VpqHpd1wtqg7kPqMMPxnqvSdkYr/VP5+75j+RfEP6a1X6tv/um3i1+l68O31PT4H2b1NBc3cR1Gq3BdoY2IExnP+0Oc5Hp0nm2SJ7REJOK31PbsobH5xOPI5mLPJhvy/NtywxxfOpIdbVZRoIFeUEGIDgEAgEBQJMCTAzaBkZEmNxopHA4+M6Q36a+lTta2mxAT0BKkDPtPVJ5bRKx3fh2p071MUsVkdTghhjn+34z6UTE9m0xruzC55Yz7YzKj3NI/FNGnfL9KopQqD3gZauZwBsfkfsEznw7TronSX6X2Y4g+p0lOoZQr2BwwTIUsjspwPfbkeh+M48lYraYeJPs2Qra6odKtdaw+FypqM/O1pm9ZPSft/h7MjMQMNQOYPrDTfliF0Ou0q4ypIPt/HKVthyxWNS2VKM52jPwMbbePT3dQ1Kev3GNnj091fSU9fuMbPHp7stZxKqmt7XYiutWdyFYkKBknAGTLEbnUHj093gf6w+F//e/9xf8A+M28C/svjUe7oOK031JdWxNdgypKspIzjOCM+UytHLOpTx6e7WzULg45k+087eb566nTjhzYvmUkOtqso0EChAIO55PpB0OAQCAjARgQYGbQM2kChxZI1aSkeHJxGpu7sapFa5UY1qTtV3AJCk+WT5yxOm+LLNZ1PZ8Brey/f0V6zQ5aq1A507H+crP6SAnqQcgg88g9Z1Y8/pZ5npOpedxjjtluhXSXbhdTehywIZqwrja+ee4Er16/ETSuOIvzQRHV9/2Ir2cO0o9UZv1nZv2zlzTu8vFu6+G+HX66sdDTobfmLa8/9IfKZvVvkif1ezIzEDPUDl8DCwwBliHVg4fxdzvULVpeV0fAx9Sw0aT4CPqHfLnbkbsZ25G7Hrj7D8o0fA1+pjxGlb6baC23vanQkYLKGBXdj7Z6r0mJPgY+p8b/AKt6v/1Wf3a/vnR8RPs9/Bx7vs+HaYUU1UrzWqtKwT1O0YyfjOe3WZl5ngY+p0hp50zycFy1mYk5HLi+ZaQ62iyjQQKEBwHAIBAICgIwJMCGEDF4IhIklzZ46xIkYCB8/pD9D1r0Hlptcz3ac/opqsZuo/tAd4PfvIbT5679Y/p+dP4fL9s9IdRrNZ/w+iFo/sbGP3M07MU8tY+8vMdn2/ZxNui0i+mmo/7FnNkndpeJ7ufS/wDyerPkNFoQfj3mqOPl+M8NJ/8AnH6z/Z7MMhATjII9oWHJieol2cNxFccTWzRVl3Dq+MxfdYWNnxmL7ufV8Nqu52Lk4C5yQQOZ5enU/ONpPF4p90W8NoUBjWAKgWAUtyAy3TPPmTB8XieVoe2mivsrqrNpe1gq5rIGT6nyms4bRG5evi8b6PbMtp8Zi+42ybZ5OMpNZivdUjhxfMtIdbRZRoIFCA4DgEAgEAgKBJgZMfT/AChde7Mr84SZTIxzR5SkcogcfGOHpqaWqfcOjI6HFlVinKWIfJgQCJXvHOrQ8TifAbLK9ayHffrNKNMTYwrABXYbMqpwcc8Y5keWZtE9IifR21w1i0Tvs4/ydcAfSUO1l99tiW3UrUbru4qWtzXhay2wg7dwO0EBhPN+vYz1m9oisdPfpt9Jw/TBbdRYSxsvatiGwAiogRUX2zuPPzczxMac+anLEa7O+eXOIBA5iME/GHqVrCLEChCPO7Sa8abSX3EAlayFB6F28Kg+2WE94681ohY7vy3sLVu4jpR5KXb9Wtj+6d2afJLS3Z+yT5zIQHK1xfOpJXW1WBYgUIDgOBOD6/OF3AyfSDUDd7GDQ3exg0Dn0g6JK+sG/ZJEIhoGZEjzaNxMJkcIgBM9VhvgpzTufR8/2y482hoVq1DXWvsr3c0XAyXI88cuXqRNa15p067W5Y2+Q7J9s7/pIrvKWVai8KWChXrtfaoI28iM4yMeec+vqaRqZiezzF53ES/TszN7tWLRqVTxMacWXFNP0KeWIgY2jn9kKBAsQKEI+V/KWxGgx9a+oH4eI/iBN+H+d6r3fKfkzr3a/P1KLW+9V/xTfiJ8j1bs/VpwsxAYla4vnWsrraLA0EBiA4DgEAgEAgKAjAkwMyIGTmFiNkZ5cF41aYKHllqCRhh5cj8DPVXTw1usw8btTwVeIUBFcJbW2+tm6ZwQVYDngg9R0wDzxia1tyzt1WrzRp8z2d7B316iu3UtUtdTrYFrZnax1OV8hgZAPqcYxPd8m41DxXHqdy/QWcDqQJk1QthJGAdvmTJMsM1q8sw2mbhBMLpixyYUxCLEBwj5v8olO7h1p+o9L/8AOF/xTbBPnh6r3fM/kqrzqNQ31aVX9Zwf8M34mfLD1Z+lziZiA1la4vmarK61rAsQKgEBwCAQCAQFAUBGBm5+cLEM9vmesEz6QlhI5M0ebaZGIIhd6c7aQeRwPhmeuZ0xxM66wpdKPMk/bgRuTxslu0LWtR0A+XOROTJbvKswsYY9SyYe4pWPRJWC9eaNEFkckxMd1AQigIDgef2g0pu0eprAyXosC/1gpK/eBPeOdWiSO74z8k6+LWHH6OnH32To4n0erP0ScjyINLRZYdGKkx1loBK3UIFwHAIDgEAgEAgEBQIJz0+flC613SF+cEzsiIRBWHm1YtGpTtk0x8D7liHuMNYIw0isR2gAQp7YBtgG2UG2AbYCIgGIUbZEGIDxAYECgJRQECwIFAQHAYgOAQJwfX5wu4GT6Qaj3G72MHKN3sYNfcc/hB0Lb684N+xwhYgLECSIEkQEwgggsGwV+cLEmBCHtgG2AYgG2AisACwDbANsB4gAECsQGBAoCA4DgEBwCAQCEEAggQpGAQFARgSYCMCW/aIIOACCAvQfCCVSAgEoUgIClAYBAcAEBwGIFQCA4DgEAgf/2Q==" head="Personalized Plans" text="Tailored workouts and meditations for every level." />
                <ViewCard img="https://thumbs.dreamstime.com/b/scientific-depiction-brain-neuron-pathways-electrical-activity-illuminating-neural-network-generative-ai-359562578.jpg" head="Science-Backed" text="Uses proven methods to enhance mental and physical health.

" />
                <ViewCard img="data:image/jpeg;base64,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" head="Supportive Community" text="Stay motivated with like-minded individuals.

" />
            </div>
        </section>
        <footer class="footer">
    <div class="footer-container">
      
      <!-- Left Section: Logo & Tagline -->
      <div class="footer-brand">
        <h2>MindSync</h2>
        <p>Balance your mind, strengthen your body.</p>
      </div>

      <!-- Center Section: Navigation Links -->
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Programs</a>
        <a href="#">Contact</a>
      </div>

      <!-- Right Section: Social Icons -->
      <div class="footer-social">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>

    </div>

    <!-- Bottom Section: Copyright -->
    <div class="footer-bottom">
      &copy; 2025 MindSync. All rights reserved.
    </div>
  </footer>
    </section>
</template>
<script>
    import ViewCard from '../components/ViewCard.vue'
    import { ref, onMounted } from "vue";
    export default {
        name: "LandingView",
        components: {
            ViewCard,
        },
        setup(){
            const canvas = ref(null);

            onMounted(() => {
            if (canvas.value) {
                canvas.value.width = window.innerWidth;
                canvas.value.height = window.innerHeight;
                const ctx = canvas.value.getContext("2d");
                const gridSize = 100;
                ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
                ctx.strokeStyle = "#21ff2c";
                ctx.lineWidth = 0.3;

                for (let x = 0; x < canvas.value.width; x += gridSize) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.value.height);
                    ctx.stroke();
                }

                for (let y = 0; y < canvas.value.height; y += gridSize) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.value.width, y);
                    ctx.stroke();
                }
            }
        });

        return { canvas };
        }
    }
</script>
<style scoped>
    * {
        padding: 0;
        margin: 0;
        font-family: "Poppins",sans-serif;
        box-sizing: border-box;
        color: #fff;
    }
    section {
        overflow-x: hidden;
    }
    .nav-bar {
        backdrop-filter: blur(1px);
        padding: 15px;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1000;
    }
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #000;
        overflow-x: hidden;
    }
    .info-section {
        position: absolute;
        left: 2%;
        top: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80% !important;
    }
    @keyframes trigger {
        from {
            width: 0vw;
        }
        to {
            width: 30vw;
            color: #000 !important;
        }
    }
    @keyframes move-up {
        from{
            transform: translateY(45%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .info-text {
        padding: 30px;
        width: 100%;
    }
    .info-text > h1 {
        font-size: 3em;
        user-select: none;
        animation: move-up 1s ease-out forwards;
    }
    .info-text > p {
        color: grey !important;
        width: 50vw !important;
        padding: 18px 0px !important;
        user-select: none;
        animation-delay: 3.5Ss;
        animation: move-up 1s ease-out forwards;
    }
    .img-container {
        position: relative;
    }
    @media (max-width:768px) {
        .info-text > h1 {
            font-size: 2em;
        }
        .info-section {
            left: 10% !important;
        }
        .join-us {
            width: 40vw;
        }
        main::after {
            content: '';
            position: absolute;
            bottom: -15%;
            right: -10%;
            width: 60vw;
            height: 60vw;
            border-radius: 50%;
            background-color: #21ff2c;
            opacity: 0.34;
        }
        main {
            height: 70vh;
            overflow: hidden;
        }
        .choose-us > h1 {
            font-size: 1.8em !important;
        }
    }
    .img-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 25vw !important;
        height: 20vw !important;
        background-color: #21ff2c;
        opacity: 0.4;
        border-radius: 46% 54% 29% 71% / 65% 30% 70% 35% ;
        z-index: 5;
    }
    .landing-picture {
        width: 28vw !important;
        height: 32vw !important;
        object-fit: cover;
        mix-blend-mode: difference;
        image-resolution: auto;
        z-index: 10;
    }
    .join-us {
        color: #000;
        max-width: 40vw;
        padding: 12px;
        background-color: #21ff2c;
        border-radius: 50px;
        outline: none;
        border: none;
        transition: all 750ms;
        margin: 8px;
        animation: trigger 1s ease-in-out forwards;
    }
    .join-us:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    .choose-us {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #000;
        padding-bottom: 5%;
    }
    .choose-us > h1 {
        font-size: 2.3em;
        margin-top: 10px;
        padding: 8px;
        width: 100vw;
        text-align: center;
    }
    .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        flex-wrap: wrap;
        margin: 32px;
    }
    .footer {
  background-color: #111;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.footer-brand h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.footer-brand p {
  font-size: 14px;
  color: #bbb;
}

.footer-links {
  display: flex;
  gap: 15px;
}

.footer-links a {
  text-decoration: none;
  color: white;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #21ff2c;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  color: white;
  font-size: 18px;
  transition: color 0.3s;
}

.footer-social a:hover {
  color: #21ff2c;
}

.footer-bottom {
  font-size: 12px;
  color: #777;
  margin-top: 20px;
  border-top: 1px solid #333;
  padding-top: 10px;
}
</style>