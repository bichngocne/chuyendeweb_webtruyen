export const sidebarMenuAdmin = [
    {
      path: "list-story-admin",
      text: "Danh sách truyện",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
        >
          <path fill="url(#a)" d="M.32 0h29.32v30H.32z" />
          <defs>
            <pattern
              id="a"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use href="#b" transform="matrix(.01 0 0 .00977 0 .011)" />
            </pattern>
            <image
              id="b"
              width="100"
              height="100"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVR4nO2d3WvOYRjHP9uQeTsks7yFCBEnO5DYiYzmbUuivEwOrNG8K8lLSYtCWMlLW1P4A+TIEgfIIXO4A1GGE7Jpw/Sr+yk5mOf5Pff1u192fep7+vRc9/f3cl+/+7qvGxRFURRFURRFUcJhOXAeuAs8KFDtwElgoesgYqASeAIMWtBvoAMY7zqoUJkCvLNkxt96AZS7Di5EHgmYkdMF18GFxmJBMxL16aOrMI4IGzII1AhdTFFyKQND9rgOMiSuZmBIo+sgYzKkJ4/844cFQyqBtUC9x1oPLHBtSGcev9FThCFjgFvArwzuVFt6BkwjUkPaPBjgNHprLqaoDJltsvrBQLWLyAzZ4sGgFqNWIjOk1oNB9e4rhEtDJgBfPRjYtFpBhC/1HYG+R5KZITEakrDKfPr/7sFAD6V+4DXQBJQghGbqnqGGeEZLBrf6dtdBhkRDBoZUuQ4yJCYCvYJmdAOlroMMjdOChtS7Di5EyoB7Amacch1YyCTz6r3AewtGvDGfRRQLlJrCh3UpFnCSBaY5Nv6EoiiKEiSTgG3A0RQ6BNSZz+pKkYwFrgMDFmZZ34DjmhCmZxzwUiAPua+mpOO2YKZ+IOV/GrbMFK6J+gKMch1kSOwTNCOnatdBhsTFDAxpcB1kSOiKYWCGJGU6r/6jAQvF1iOBGcBSjzUviy16rqtOSoCDwKcMHp02lFT63zCpQpSGnPVgkNOo06wjRWXIZFPrNBioNhKZIfUeDGoxukJkhtR5MKjF6DIC6COL1IZsiM2QkF/qj2N8qeemvc3ARw8GOd9GCK0up71ZJYYjgOkBJIajpYzI1xAbapQOIib046JnNGVwh1S7DjIkpBeoPusCVeHcFDSkWeAiGhYVJ1rk4KEp1yyWAR3TihN7G3i2AidMd9JClDRD26Qd5BRFUYb1hp0lRWzYmes6gFgoMd+cPliYZXUZQ5WUlJnCaNtJoW76TMkZwUx9c9o/NZw36PQJGtKtCWJh7BY0I6cqoYspSrT5jGfoiqFnqCGe4brqJGG16RYt2ZXIhvpNA+X9khMV14bsDLQJ5h2E0DaxpDZlZWyG1HpwpRejpGLHOtpqnNSGRNdqfFag749om/GHfFxFl9R+Q9eGlJsypJ8eDHK+egpMJfIjjyqANQEceTRfyoh8DbGhRukgYkKPzfOMwxncITWugwyJRcJm9EruNoqVh4KGtLgOLkQqhI7vfq7Hd6en0uQcNoxIsu92fVTZYRlwDujII//4V22mSFv8eFJFURRFURRFURSFIfkDimWUfWAc+ZIAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      ),
    },
    {
      path: "list-category-admin",
      text: "Danh sách thể loại",
      end: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
        >
          <path fill="url(#c)" d="M.32 0h29.32v30H.32z" />
          <defs>
            <pattern
              id="c"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use href="#d" transform="matrix(.01 0 0 .00977 0 .011)" />
            </pattern>
            <image
              id="d"
              width="100"
              height="100"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZElEQVR4nO3d24tNYRjH8e84Ey4ICYNJyuFu0JCGnC/EuCAZFybT1IgkCrdSIyk0V5jQ/AHixmGu585cjXMOhYxpyGnIaVhaWlOSvfYs7b3Xs97396nnbtrv4bfbs1p7v88CERERERERERERERERSWossArY7HgtA0ZZf3usAV4DgSf1DKjEqNHAKwObFJS4HgBlGFRtYHOClKoCg+oMbEyQUq3EoGMGNiZIqXZhTPgZei/HZHuBN47UpxxrbMOYrTkm+hOYgTuWxqxzCUZUxFxd3cQtg4CuHGt9BIxPe4KLgOcxn621uOdQzHrvALNLPaERwArgItAXM7lOYAhu3ol4EbPuL0AzUAUMK9YkFkf/uHoGeNXxDViAuzYkuAILw7sCzC3U4OELfU54GdiI+44k3JN3wNRCDNycYNAfwF78UAYcTxjKwUIMfHWAg70E1uOfOuD9APfoXCEGvJZnkI/ASQuXfCmaBrQAX/PsVfg3RQskvIraCYwrxCCOmAzsBh6nEUhTIV7cUa0KxBYFYowCMUaBGKNAjDEZyCRgO9DgWG2P1papQNZF3xQGjlYvsDYrgQwHug1sWlDk6o65vW4qkPkGNisoUc3LQiAT83xx5Ur1AROyEEjorIENC4pcZ2LWby6Q8KvbA0A70OFYtQP7gcFZCsR3rQrEFgVijAIxRoEYo0CMUSDGKBBjMhXIpuhnqR3Gqw2ocT2QWgO3PIKEtc3lQDoNbHCQsMI5OxtIFo9N97gcyCUDGxwkrHDOzgYyPTr6FWSkHgLlLgfSfwKrxsCPFRry1MZorrgeiA9aFYgtCsQYBWKMAjFGgRiTSiDhLYV6z88W/m0KsAd4kkYgfx76POV5MOXAhahhQtxetZTyWHR31OHAN/XAh1Iei07aOGAf/jQOOJFG44A5/9Faw1yHtSI4mnBP3haqtQZRZ5vrCZrPfAcW4q6ahM1nLhey+cy/zn8sB87n+ZX7LYfbM3XFrDv8NDkd9RIbWurJVUbNhH1qYHY4Zr23gVlpTzDsqagWf/z+7sRMm5EtMe+amfjRBLMKY5eAdz1uE3sDg5oSXga6VI0YtMPAxgQpVdgU1Bw14zfG18dV3Lf6uIrQas9CeWr5gS79xnjyyKNqYGTamy0iIiIiIiIiIiIiIkLG/AIWipc2ok1xbwAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      ),
    },
    {
      path: "list-pending-admin",
      text: "Danh sách chờ duyệt",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
        >
          <path fill="url(#e)" d="M.32.968h29.32V30H.32z" />
          <defs>
            <pattern
              id="e"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use href="#f" transform="matrix(.0099 0 0 .01 .005 0)" />
            </pattern>
            <image
              id="f"
              width="100"
              height="100"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/ElEQVR4nO3c3YtVVRjH8a+jkVa+oCDWVUZqBV6ILzeWNUJKSFCgiH9BBjUKvl2J6IVvN9a1EUk0WYp4qXlT9CqpQeSNJZZoJVOU5pgizsgDa3DYnP06a5+1ztm/Dzw3Z86e/biW59ln9nr2AhEREREREREREZGIzAXeBY4A24DJoRNqsiXATWB4VPwIPBY6sSZ6BPg5MRkjsTV0ck30TspkWHwcOrmmeQG4lzEh+0In2CRZpcriFjA7dJLdbEKJUmWxKVCeXa0H2A4MuNJ0GlhcoFR9DYwvea4ZwCHges5ExxxDwCVgAzCujgnZ3uKkg8DlnFI1r8LEfxfBgPqMWirEQJsSeTGCAfQdf/iejIdyypKvUmXWRTCAvuNei+vumJ0ukUCVUjXiaVd/h7sozlCDxe6a0Y6auTuCQfQVdhtpKTXpLTApVUtV0irgIPBph8YnwF73ia+Vfc39L2UybgPP1Z2AFP+k9GmwwlkEfAHcBX4B1gfMRURERERERESKrv5JBDYCV926xllgWeiEmmxDyoLVs6ETa6J5bvBb3Zo/EDq5prFFqW8yFq76QyfYNJtzVhLfCp1gkzyTUaosLgCTQifZrWXJVgvXjurVzStV1gLzfIVzPQqsBNZ0aKx2jSG1dC2ax4EfEgO9A9iSU6qqXMyXA39F0DHiI75yrbHeHcv4BGSVKuuML2MK8HcEA+kzPvI9GVaW7pRMomqpej2CAfQd//u+a9GTc9FuFfaIQhWvRTCA0U+I+aBEAlVK1QiVrIKmAucKliprphuL3ord9jHGl3Vd1M30ApNStVQl2Sfs5Q7/2ruQNpgGfJ8yGRf1PHoYM1pMyg33h5AEMsndn+p3jw88GSoREREREREREUl4GJgPvOJivntNAmx4edjdx0reaLzufqb7W21gHSEfFtyTZMjtfWXHSA1mJrpPisY5d6x43qbp8zGsntk+KLq2eLTLw5Km9XKJB7Na7FhdJWzjGpWump77GB2fAW+7OJXzXntPnleB9zp8e6b9wBxqkjXItmKYtCfj/SdzzrXXU8dHDDFYsWEw128ZGzzaxT7JXvsz5ZhfM84zR1v8FXM7ZXBPZBxzIuUY+11p1kXwv7ojNsG8lnKynzKOOZ9yjP2uNMsiGEDf8Ts1OJPxl/iKFu9fmfGXvLUQpekBvo1gEKPfSDnrQvsv8IZ7huQJ4E33WpkvAcm+L+sl/ieCwawaQ65xsK+uh3YWekx0QR0JNtFxDxNyNPQ/ops8Ncanm+wxNXU4etbrHkApOxl2zEu+k5EHC1NXS0zGFS1U1W+quz2Stsv1sPvZHvdeaWMXvN0I3Am872Kne21iu5IQERERERERERERocnuA/aFPE3STdR0AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
    },
    {
      path: "list-user-admin",
      text: "Danh sách người dùng",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
        >
          <path fill="url(#g)" d="M.32 0h29.32v30H.32z" />
          <defs>
            <pattern
              id="g"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use href="#h" transform="matrix(.01 0 0 .00977 0 .011)" />
            </pattern>
            <image
              id="h"
              width="100"
              height="100"
              href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
  ];
  