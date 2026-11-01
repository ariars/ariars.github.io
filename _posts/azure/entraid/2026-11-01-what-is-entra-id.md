---
layout: post
title: "Microsoft Entra ID"
permalink: /blog/azure/entraid/what-is-entra-id
date: 2026-11-01 14:00:00 +0900
tags: [Azure, EntraID, 보안]
categories: [Azure, EntraID]
image: /blog/azure/entraid/asset/what-is-entra-id-cover.svg
image_caption: ""
featured: true
video: false
description: "Microsoft Entra ID가 무엇이고 어떤 일을 하는지, 꼭 알아야 할 핵심만 정리했습니다."
---

> **한 줄 요약**  
> Microsoft Entra ID는 **"누가 접속하는지 확인하고, 그 사람이 무엇을 쓸 수 있는지 정해 주는" 마이크로소프트의 클라우드 서비스**입니다.

---

## 1. Microsoft Entra ID란?

![Microsoft Entra ID의 위치](/blog/azure/entraid/asset/what-is-entra-id-01-overview.svg)

회사에서 일을 하려면 메일, 메신저, 문서, 업무 프로그램 등 여러 서비스에 접속해야 합니다. 이때 **접속하려는 사람이 정말 그 회사 직원이 맞는지 확인하고, 그 사람에게 허락된 서비스만 쓰게 해 주는 관리 시스템**이 필요합니다.

Microsoft Entra ID는 바로 이 역할을 하는 **클라우드 기반의 ID 및 액세스 관리 서비스**입니다.

- **ID(Identity)** — 시스템 안에서 한 사람(또는 하나의 기기·프로그램)을 구별하는 디지털 신원입니다. 흔히 "계정"이라고 부릅니다.
- **액세스(Access)** — 어떤 서비스나 정보에 들어가서 사용하는 것을 말합니다.
- **클라우드 기반** — 회사가 직접 서버를 설치하지 않아도, 인터넷을 통해 마이크로소프트가 운영하는 시스템을 빌려 쓰는 방식입니다.

> 📌 **이름에 대하여**  
> 이 서비스의 예전 이름은 **Azure Active Directory(Azure AD)**였습니다. 2023년에 **Microsoft Entra ID**로 이름이 바뀌었으며, 기능은 그대로 이어집니다.

---

## 2. 가장 중요한 두 가지 일 — 인증과 권한 부여

![인증과 권한 부여는 순서대로 일어납니다](/blog/azure/entraid/asset/what-is-entra-id-02-authn-authz.svg)

Entra ID가 하는 일은 크게 두 단계로 나눌 수 있습니다.

### 인증 (Authentication)
**접속한 사람이 본인이 맞는지 확인하는 과정**입니다. 계정 이름과 비밀번호를 확인하고, 필요하면 추가 확인을 요구합니다. 인증을 통과하면 "로그인된 상태"가 됩니다.

### 권한 부여 (Authorization)
**인증을 통과한 사람이 무엇을 할 수 있는지 정하는 과정**입니다. 어떤 서비스를 쓸 수 있는지, 정보를 보기만 할 수 있는지 수정까지 할 수 있는지를 결정하고, 허락되지 않은 범위는 막습니다.

> 인증은 **"누구인가"**, 권한 부여는 **"무엇을 할 수 있는가"**에 대한 답입니다. 항상 인증이 먼저, 권한 부여가 그다음입니다.

---

## 3. 테넌트 — 조직마다 따로 만들어지는 공간

회사가 Microsoft 365나 Azure 같은 마이크로소프트 클라우드 서비스를 사용하기 시작하면, 그 회사만을 위한 **전용 Entra ID 공간**이 하나 만들어집니다. 이것을 **테넌트(Tenant)**라고 합니다.

- 테넌트 안에는 그 조직의 계정, 그룹, 기기, 앱 정보가 모두 담깁니다.
- 테넌트끼리는 **완전히 분리**되어 있어, 다른 조직이 우리 조직의 정보를 볼 수 없습니다.
- 보통 하나의 조직은 하나의 테넌트를 사용합니다.

---

## 4. Entra ID가 관리하는 대상

| 대상 | 설명 |
|---|---|
| **사용자** | 조직에 속한 사람 한 명 한 명의 계정입니다. |
| **그룹** | 여러 사용자를 하나로 묶은 것입니다. 그룹에 권한을 주면 그룹에 속한 모든 사용자에게 한 번에 적용됩니다. |
| **기기** | 업무에 사용하는 PC, 노트북, 휴대폰 등 조직에 등록된 장치입니다. |
| **애플리케이션(앱)** | Entra ID를 통해 로그인하도록 연결된 프로그램과 서비스입니다. |
| **역할** | 관리 작업을 할 수 있는 권한의 묶음입니다. 필요한 사람에게 필요한 역할만 부여합니다. |

---

## 5. 안전한 로그인을 위한 기능

### 5-1. 다단계 인증 (MFA)

![다단계 인증](/blog/azure/entraid/asset/what-is-entra-id-03-mfa.svg)

비밀번호 하나만으로 로그인하면, 비밀번호가 새어 나갔을 때 다른 사람이 계정을 그대로 쓸 수 있습니다. **다단계 인증(Multifactor Authentication, MFA)**은 **서로 다른 종류의 확인을 두 가지 이상 거치도록** 하는 방식입니다.

- **알고 있는 것** — 비밀번호, PIN
- **가지고 있는 것** — 휴대폰 인증 앱(Microsoft Authenticator), 보안 키
- **본인의 신체 특징** — 얼굴, 지문

한 가지가 노출되더라도 나머지 확인을 통과할 수 없기 때문에 계정이 훨씬 안전해집니다.

### 5-2. 암호 없는 인증 (Passwordless)

비밀번호를 아예 사용하지 않고 **얼굴·지문 인식, 보안 키, 패스키(Passkey)** 등으로 로그인하는 방식입니다. 외우거나 입력할 비밀번호가 없으므로, 비밀번호를 빼내려는 공격 자체가 통하지 않습니다. 마이크로소프트는 이 방식을 가장 안전한 로그인 방법으로 권장합니다.

### 5-3. 셀프 서비스 암호 재설정 (SSPR)

사용자가 비밀번호를 잊어버렸을 때, 관리자에게 요청하지 않고 **본인 확인을 거쳐 스스로 비밀번호를 다시 설정**할 수 있게 하는 기능입니다.

---

## 6. 조건부 액세스 — 상황에 따라 다르게 판단하기

![조건부 액세스](/blog/azure/entraid/asset/what-is-entra-id-04-conditional-access.svg)

**조건부 액세스(Conditional Access)**는 로그인할 때의 **상황 정보**를 함께 살펴보고, 관리자가 미리 정해 둔 **정책(규칙)**에 따라 접속을 어떻게 처리할지 결정하는 기능입니다. 마이크로소프트가 말하는 **제로 트러스트(Zero Trust, "아무것도 자동으로 믿지 않고 매번 확인한다")** 보안의 핵심 기능입니다.

**확인하는 상황 정보**
- 누가 접속하는지 (사용자, 그룹)
- 어디에서 접속하는지 (위치, 네트워크)
- 어떤 기기를 쓰는지 (회사에 등록된 기기인지, 보안 상태는 괜찮은지)
- 어떤 서비스에 들어가려는지
- 위험 신호가 있는지

**내릴 수 있는 결정**
- **허용** — 조건을 충족하면 그대로 접속합니다.
- **추가 확인 요구** — MFA 등 추가 절차를 거치게 합니다.
- **차단** — 허용할 수 없는 상황이면 접속을 거부합니다.

---

## 7. 싱글 사인온 (SSO)

**싱글 사인온(Single Sign-On, SSO)**은 **한 번 로그인하면 연결된 여러 서비스를 다시 로그인하지 않고 사용할 수 있게 하는 기능**입니다.

- 사용자는 여러 개의 비밀번호를 기억할 필요가 없습니다.
- 관리자는 계정 하나만 관리하면 되므로, 퇴사 등으로 계정을 막을 때도 한 번에 모든 서비스 접근을 끊을 수 있습니다.
- Entra ID는 Microsoft 365, Azure뿐 아니라 **수천 개의 외부 서비스**와 SSO로 연결할 수 있습니다.

---

## 8. 관리자 권한을 안전하게 — PIM

조직에는 모든 설정을 바꿀 수 있는 강력한 **관리자 권한**이 있습니다. 이런 권한을 가진 계정이 공격을 받으면 피해가 매우 큽니다.

**PIM(Privileged Identity Management, 권한 있는 ID 관리)**은 관리자 권한을 다음과 같이 관리합니다.

- **필요할 때만 활성화** — 평소에는 권한이 꺼져 있고, 작업이 필요할 때만 신청해서 켭니다. (Just-In-Time)
- **시간 제한** — 정해진 시간이 지나면 권한이 자동으로 꺼집니다.
- **승인 절차** — 권한을 켤 때 다른 관리자의 승인을 받도록 할 수 있습니다.
- **기록과 검토** — 누가, 언제, 왜 권한을 사용했는지 기록이 남습니다.

---

## 9. 위험을 스스로 찾아내는 ID 보호

**ID 보호(ID Protection)**는 마이크로소프트가 전 세계에서 매일 분석하는 방대한 보안 정보를 바탕으로 **위험한 로그인과 위험한 사용자를 자동으로 찾아내는 기능**입니다.

- **유출된 자격 증명** — 인터넷에 유출된 계정 정보 목록에 조직 사용자의 정보가 있는지 확인합니다.
- **비정상적인 이동** — 짧은 시간 안에 물리적으로 불가능한 거리의 두 장소에서 로그인한 경우를 찾아냅니다.
- **익명 네트워크 사용** — 접속 위치를 숨기는 경로를 통한 로그인을 찾아냅니다.

위험이 감지되면 조건부 액세스와 연동해 **추가 인증을 요구하거나, 비밀번호 변경을 요구하거나, 접속을 차단**할 수 있습니다.

---

## 10. 하이브리드 ID — 기존 사내 시스템과 연결하기

많은 회사가 이미 사내 서버에 **Active Directory(AD)**라는 계정 관리 시스템을 운영하고 있습니다. 사내 시스템과 클라우드의 계정을 따로 관리하면 번거롭고 실수도 생기기 쉽습니다.

**하이브리드 ID**는 사내 Active Directory와 Entra ID를 연결해 **하나의 계정으로 두 환경을 모두 사용할 수 있게 하는 구성**입니다. 이를 위해 다음 도구를 사용합니다.

- **Microsoft Entra Connect** — 사내 서버에 설치해 계정 정보를 클라우드로 동기화하는 도구입니다.
- **Microsoft Entra Cloud Sync** — 가벼운 에이전트만 설치하고 설정은 클라우드에서 관리하는 동기화 방식입니다.

하이브리드 환경에서 비밀번호를 확인하는 방법은 세 가지가 있습니다.

| 방식 | 설명 |
|---|---|
| **암호 해시 동기화 (PHS)** | 비밀번호를 복원할 수 없는 형태(해시)로 바꿔 클라우드에 동기화하고, 클라우드에서 확인합니다. 사내 서버가 멈춰도 로그인할 수 있습니다. |
| **통과 인증 (PTA)** | 로그인할 때 클라우드가 사내 서버에 비밀번호 확인을 맡깁니다. 비밀번호 정보가 클라우드에 저장되지 않습니다. |
| **페더레이션** | AD FS 같은 별도의 인증 시스템이 로그인을 처리하고, 그 결과를 Entra ID가 받아들입니다. |

---

## 11. 조직 밖의 사용자 — External ID

조직 내부 직원뿐 아니라 **협력사·거래처 사람(B2B)**이나 **회사 서비스를 이용하는 고객(B2C)**도 로그인이 필요할 수 있습니다. **Microsoft Entra External ID**는 이런 외부 사용자에게 필요한 범위의 접근만 안전하게 허용하고, 고객용 로그인·회원가입 화면도 만들 수 있게 해 줍니다.

---

## 12. 라이선스 — Free, P1, P2

Entra ID는 기본 기능은 무료로 제공되고, 고급 기능은 유료 라이선스로 제공됩니다.

| 등급 | 주요 기능 |
|---|---|
| **Free** | 사용자·그룹 관리, SSO, 기본 보안 설정(보안 기본값)을 통한 MFA |
| **P1** | Free 기능 + **조건부 액세스**, 그룹 기반 관리, 하이브리드 환경 고급 기능, 사내 사용자 셀프 서비스 암호 재설정 |
| **P2** | P1 기능 + **ID 보호**(위험 감지), **PIM**(관리자 권한 보호), 액세스 검토 |

> 📌 Microsoft 365 요금제에 따라 P1 또는 P2가 포함되어 있을 수 있습니다. (Microsoft 365 E3에는 P1, E5에는 P2 포함)

---

## 13. Microsoft Entra 제품군

![Microsoft Entra 제품군](/blog/azure/entraid/asset/what-is-entra-id-05-entra-family.svg)

"Microsoft Entra"는 ID와 접속 보안에 관련된 **여러 제품을 묶은 이름**입니다. Entra ID가 그 기반이 됩니다.

| 제품 | 하는 일 |
|---|---|
| **Entra ID** | 로그인과 권한 관리. 다른 모든 제품의 기반입니다. |
| **Entra ID Governance** | 입사·이동·퇴사에 따라 권한을 자동으로 주고 회수하며, 권한이 아직 필요한지 정기적으로 점검합니다. |
| **Entra External ID** | 협력사·고객 등 조직 밖 사용자의 로그인을 관리합니다. |
| **Entra Verified ID** | 위조가 어려운 디지털 증명서를 발급하고 확인합니다. |
| **Entra Workload ID** | 사람이 아닌 프로그램·서비스가 사용하는 계정을 보호합니다. |
| **Entra Private Access** | VPN 없이 사내 시스템에 안전하게 접속하게 합니다. |
| **Entra Internet Access** | 인터넷을 사용할 때 위험한 사이트와 트래픽을 걸러냅니다. |
| **Entra ID Protection** | 위험한 로그인과 사용자를 탐지하고 대응합니다. |

---

## 14. 정리

1. **Microsoft Entra ID**는 마이크로소프트의 클라우드 기반 **ID 및 액세스 관리 서비스**입니다.
2. 핵심 역할은 **인증(본인 확인)**과 **권한 부여(사용 범위 결정)** 두 가지입니다.
3. 조직마다 독립된 공간인 **테넌트**에서 사용자, 그룹, 기기, 앱을 관리합니다.
4. **MFA, 암호 없는 인증, 조건부 액세스**로 로그인을 안전하게 지키고, **SSO**로 사용자의 편의를 높입니다.
5. **PIM**과 **ID 보호**로 관리자 권한과 위험한 로그인까지 관리합니다.
6. 기존 사내 시스템과는 **하이브리드 ID**로, 조직 밖 사용자와는 **External ID**로 연결합니다.

---

### 참고 자료

- [Microsoft Entra 설명서](https://learn.microsoft.com/ko-kr/entra/)
- [Microsoft Entra ID란?](https://learn.microsoft.com/ko-kr/entra/fundamentals/whatis)
- [Microsoft Entra 인증 방법](https://learn.microsoft.com/ko-kr/entra/identity/authentication/concept-authentication-methods)
- [조건부 액세스란?](https://learn.microsoft.com/ko-kr/entra/identity/conditional-access/overview)
- [Privileged Identity Management란?](https://learn.microsoft.com/ko-kr/entra/id-governance/privileged-identity-management/pim-configure)
- [ID 보호란?](https://learn.microsoft.com/ko-kr/entra/id-protection/overview-identity-protection)
- [하이브리드 ID란?](https://learn.microsoft.com/ko-kr/entra/identity/hybrid/whatis-hybrid-identity)

<div class="ai-badge" style="margin-top: 48px; padding-top: 14px; border-top: 1px dashed var(--border-color); font-size: 12.5px; color: var(--text-alt-color); display: inline-flex; align-items: center; gap: 6px; opacity: 0.85;">
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
  <span>이 글은 AI(인공지능)의 도움을 받아 작성되었습니다.</span>
</div>
